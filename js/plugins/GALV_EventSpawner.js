//-----------------------------------------------------------------------------
//  Galv's Event Spawner
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_EventSpawner.js
//-----------------------------------------------------------------------------
//  2019-04-06 - Version 1.8 - fixed bug where spawned events didn't build
//                             their meta data.
//  2017-07-14 - Version 1.7 - fixed a bug when animation is playing on spaned
//                             event when it is unspawned would stay there.
//  2017-06-24 - Version 1.6 - added ability to get the last spawned event's
//                             event ID so you can store it in a variable.
//  2017-01-21 - Version 1.5 - bug fix clearing saved events on different map
//  2016-11-08 - Version 1.4 - corrected false info in help file
//  2016-07-25 - Version 1.3 - create event note meta when events spawn now
//  2016-05-21 - Version 1.2 - added compatibility with tower defense plugin
//  2016-05-15 - Version 1.1 - fixed a bug where events wouldn't spawn at y2
//  2016-05-15 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_EventSpawner = true;

var Galv = Galv || {};              // Galv's main object
Galv.SPAWN = Galv.SPAWN || {};      // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.8) Spawn events from a specified spawn map to a desired location.
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Spawn Map Id
 * @desc The map ID of the map you are using to store spawnable events
 * @default 0
 *
 * @help
 *   Galv's Event Spawner
 * ----------------------------------------------------------------------------
 * Este plugin permite que você copie eventos de um mapa 'spawn' especificado e
 * duplicá-los no mapa atual. Este mapa de spawn é designado com o
 * Configuração do plug-in "Spawn Map Id".
 * Você pode gerar em um local x,y ou em um ID de região aleatório.
 * 
 * Ao gerar um evento, é importante saber que, se o local for
 * bloqueado por terreno intransitável, o jogador ou qualquer outro evento - não
 * spawn, a menos que você tenha alterado anteriormente a chamada do script Galv.SPAWN.overlap para
 * uma das configurações que permite sobrepor coisas.
 *
 * Se você definir a variável s como true nas chamadas de script (abaixo), esse evento
 * será 'salvo' e existirá até que seja apagado. O evento é salvo onde
 * é gerado e não salvará sua posição x,y se ele se mover e o jogador
 * sai do mapa (como eventos normais).
 *
 * Os autoswitches funcionam para todos os eventos gerados enquanto eles existem.
 *
 * ----------------------------------------------------------------------------
 *  SCRIPT commands
 * ----------------------------------------------------------------------------
 *
 *    Galv.SPAWN.event(id,x,y,s);       // Evento de desova para as coordenadas x,y
 *                                      // s = true para salvar o evento
 *                                      // deixe s completamente para não salvar
 *
 *    Galv.SPAWN.event(id,r,s);         // Gerar evento para o bloco de região aleatória
 *                                      // s = true para salvar o evento
 *                                      // deixe s completamente para não salvar
 *
 *    Galv.SPAWN.event(id,[r,r,r],s);   // Gerar evento para um bloco de região aleatória
 *                                      // da lista de matrizes.
 *                                      // s = true para salvar o evento
 *                                      // deixe s completamente para não salvar
 *
 *    Galv.SPAWN.overlap = type;        // pode ser um dos seguintes:
 *                                      // 'todos' aparece sobre personagens/terreno
 *                                      // 'terreno' qualquer terreno, sem caracteres
 *                                      // 'chars' quaisquer caracteres, sem terreno
 *                                      // 'none' aparece apenas em tiles vazios
 *                                      // eventos gerados após alterar isso
 *                                      // usará o novo tipo de sobreposição
 *
 *
 *    Galv.SPAWN.clear(mapId);         // Remova eventos normais gerados do mapa
 *    Galv.SPAWN.clear(mapId,true);    // Remova TODOS os eventos gerados inc. salvou
 *                                     // Faça MapID = 0 para limpar o mapa atual
 *
 *    Galv.SPAWN.unspawn(this);        // O código do evento Unspawns é executado.
 *
 * ----------------------------------------------------------------------------
 * EXAMPLES
 * Galv.SPAWN.event(4,6,6);        // spawn evento 4 em x6, y6, não salvo
 * Galv.SPAWN.event(1,12,true);    // evento de desova 1 na região aleatória 12, salvo
 * Galv.SPAWN.event(7,[2,3]);      // spawn evento 7 na região 2 ou 3, não salvo
 * Galv.SPAWN.overlap = 'chars';   // todos os eventos irão aparecer em cima de outros
 *                                 // caracteres a partir de agora.
 * ----------------------------------------------------------------------------
 *   SCRIPT for CONTROL VARIABLES
 * ----------------------------------------------------------------------------
 * Assim que você gerar um evento, você pode usar o seguinte script dentro de um
 * Comando de evento Control Variables para armazenar o ID do evento do último spawned
 *evento.
 *
 *      $gameMap._lastSpawnEventId
 *
 * ----------------------------------------------------------------------------
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {


Galv.SPAWN.spawnMapId = Number(PluginManager.parameters('GALV_EventSpawner')["Spawn Map Id"]);
Galv.SPAWN.overlap = 'none';
Galv.SPAWN.sSwitches = ["A","B","C","D"];

Galv.SPAWN.scenes = ['Scene_Map'];

Galv.SPAWN.onScene = function() {
	if (Galv.SPAWN.scenes.indexOf(SceneManager._scene.constructor.name) > -1) return true;
	return false;
};

Galv.SPAWN.event = function(eventId,x,y,save) {
	if (!Galv.SPAWN.onScene()) return;

	if (y == undefined || y === true) {
		var save = y;
		// Spawn random region where x = array of region Id's
		var coords = Galv.SPAWN.randomRegion(x,y);
		if (coords) $gameMap.spawnEvent(eventId,coords[0],coords[1],save);
	} else {
		// Spawn X,Y position
		if (Galv.SPAWN.canSpawnOn(x,y)) $gameMap.spawnEvent(eventId,x,y,save);
	};
};

Galv.SPAWN.randomRegion = function(regions) {
	if (regions.constructor != Array) {
		var regions = [regions];
	};
	var possible = [];
	var width = $gameMap.width();
	var height = $gameMap.height();
	for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
			if (Galv.SPAWN.canSpawnOn(x,y,regions)) possible.push([x,y]);
		};
	};
	// Randomize between possible spawning coordinates
	return possible[Math.floor(Math.random() * possible.length)];
};

Galv.SPAWN.canSpawnOn = function(x,y,regions) {
	var region = $gameMap.regionId(x,y);
	if (regions && !regions.contains(region)) return false;                              // Incorrect region
	if (Galv.SPAWN.overlap != 'all') {
		if (Galv.SPAWN.overlap != 'chars') {
			if ($gameMap.eventsXy(x, y).length > 0) return false;                        // No spawning on other events
			if ($gamePlayer.x == x && $gamePlayer.y == y) return false;                  // No spawning on player
			if (Game_CharacterBase.prototype.isCollidedWithVehicles(x,y)) return false;  // No colliding with vehicles
		};
		if (Galv.SPAWN.overlap != 'terrain') {
			if (!$gameMap.isPassable(x,y)) return false;
		};
	};
	return true;
};

Galv.SPAWN.clear = function(mapId,clearSaved) {
	var mapId = mapId || $gameMap._mapId; // 0 is to target current map
	if (mapId == $gameMap._mapId) {
		// same map clear
		if (Galv.SPAWN.onScene()) SceneManager._scene._spriteset.clearSpawnedEvents(clearSaved);
		$gameMap.clearSpawnedEvents(mapId,clearSaved);
	} else if (clearSaved) {
		// clear save on another map
		var sEvents = $gameMap._savedSpawnedEvents[mapId]
		for (var eId in sEvents) {
			Galv.SPAWN.clearSSwitches(mapId,eId);
		}
		$gameMap._savedSpawnedEvents[mapId] = {};
	}
};

Galv.SPAWN.clearSSwitches = function(mapId,eventId) {
	for (var s = 0; s < Galv.SPAWN.sSwitches.length; s++) {
		var key = mapId + "," + eventId + "," + Galv.SPAWN.sSwitches[s];
		$gameSelfSwitches.setValue(key,false);
	};
};

Galv.SPAWN.unspawn = function(obj) {
	var eId = Number(obj.eventId());
	if ($gameMap._events[eId].isSpawnEvent) {
		$gameMap.unspawnEvent(eId);
		if (Galv.SPAWN.onScene()) SceneManager._scene._spriteset.unspawnEvent(eId); // eId undefined?
	};
};

//-----------------------------------------------------------------------------
// DATA MANAGER
//-----------------------------------------------------------------------------

DataManager.loadSpawnMapData = function() {
	var mapId = Galv.SPAWN.spawnMapId;
    if (mapId > 0) {
        var filename = 'Map%1.json'.format(mapId.padZero(3));
        this.loadDataFile('$dataSpawnMap', filename);
    } else {
        window.alert("ERROR: You didn't set a spawn map ID. Choose a map from your map list to use for the spawn map.")
    }
};

Galv.SPAWN.DataManager_onLoad = DataManager.onLoad;
DataManager.onLoad = function(object) {
	if (object === $dataSpawnMap) {
        this.extractMetadata(object);
        array = object.events;
	
		if (Array.isArray(array)) {
			for (var i = 0; i < array.length; i++) {
				var data = array[i];
				if (data && data.note !== undefined) {
					this.extractMetadata(data);
            	}
			}
		}
	}
	Galv.SPAWN.DataManager_onLoad.call(this,object);	
};

DataManager.loadSpawnMapData();


//-----------------------------------------------------------------------------
// GAME MAP / SPRITESET MAP / SCENE MAP
//-----------------------------------------------------------------------------

Galv.SPAWN.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	this._savedSpawnedEvents = {};
	Galv.SPAWN.Game_Map_initialize.call(this);
};

Galv.SPAWN.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	this._savedSpawnedEvents[mapId] = this._savedSpawnedEvents[mapId] || {};
	Galv.SPAWN.Game_Map_setup.call(this,mapId);
};

Galv.SPAWN.Game_Map_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function() {
	Galv.SPAWN.Game_Map_setupEvents.call(this);
	$gameMap.setupSpawnEvents();
};

Game_Map.prototype.setupSpawnEvents = function() {
	// Adds saved spawn events to event list
	for (var eId in this._savedSpawnedEvents[this._mapId]) {
		var event = this._savedSpawnedEvents[this._mapId][eId];
		var x = event.x;
		var y = event.y;
		var id = event.id;
		this._events[eId] = new Game_SpawnEvent(this._mapId,eId,x,y,id,true);
	};
};

Game_Map.prototype.spawnEvent = function(id,x,y,save) {
	// Get highest event id available
    var eId = this._events.length;
	// Add to most recent spawn event variable
	this._lastSpawnEventId = eId;
	// Add event to event list
    this._events[eId] = new Game_SpawnEvent(this._mapId,eId,x,y,id,save);
	
	// Add save data if save
	if (save) this._savedSpawnedEvents[this._mapId][eId] = {id: id, x:x, y:y, eId: Number(eId)};
	if (Galv.SPAWN.onScene()) SceneManager._scene._spriteset.createSpawnEvent(eId);
};


Game_Map.prototype.spawnedEvents = function(includeSaved) {
	var array = [];
	for (var i = 0; i < this._events.length; i++) {
		if (this._events[i] && this._events[i].isSpawnEvent) {
			if (!this._events[i].isSavedEvent || (this._events[i].isSavedEvent && includeSaved)) {
				array.push(i);
			};
		};
	};
	return array;
};

Game_Map.prototype.unspawnEvent = function(eId) {
	this._events[eId] = null;
	Galv.SPAWN.clearSSwitches(this._mapId,eId);
	delete(this._savedSpawnedEvents[this._mapId][eId]);
};

Game_Map.prototype.clearSpawnedEvents = function(mapId,clearSaved) {
	// clear normal
	var sList = this.spawnedEvents(clearSaved);
	for (var i = 0; i < sList.length; i++) {
		var eId = this._events[sList[i]]._eventId;
		// clear self switches
		Galv.SPAWN.clearSSwitches(mapId,eId);
		// remove event
		this._events[sList[i]] = null;
		// remove from saved list
		delete(this._savedSpawnedEvents[this._mapId][eId]);
	};
	// remove all null events from end of event to prevent array bloat
	this.removeNullEvents();
};

Game_Map.prototype.removeNullEvents = function() {
	for (var i = this._events.length - 1; i > 0; i--) {
		if (this._events[i] === null) {
			this._events.splice(i, 1);
		} else {
			break;
		};
	};
};


// SPRITESET

Spriteset_Map.prototype.unspawnEvent = function(eId) {
	for (var i = 0; i < this._characterSprites.length; i++) {
		var event = this._characterSprites[i]._character;
		if (event.isSpawnEvent && eId == event._eventId) {
			for (var s = 0; s < this._characterSprites[i]._animationSprites.length; s++) {
				this._tilemap.removeChild(this._characterSprites[i]._animationSprites[s]);
			};
			
			this._tilemap.removeChild(this._characterSprites[i]);
		};
	};
};

Spriteset_Map.prototype.clearSpawnedEvents = function(clearSaved) {
	for (var i = 0; i < this._characterSprites.length; i++) {
		var event = this._characterSprites[i]._character;
		if (event.isSpawnEvent) {
			if (!event.isSavedEvent || (event.isSavedEvent && clearSaved)) {
				this._tilemap.removeChild(this._characterSprites[i]);
			};
		};
	};
};

Spriteset_Map.prototype.createSpawnEvent = function(id) {
	var event = $gameMap._events[id];
	var sId = this._characterSprites.length;
	this._characterSprites[sId] = new Sprite_Character(event);
	this._characterSprites[sId].update(); // To remove occsaional full-spriteset visible issue
	this._tilemap.addChild(this._characterSprites[sId]);
	
};

})();

//-----------------------------------------------------------------------------
// SPAWN EVENT OBJECT
//-----------------------------------------------------------------------------

function Game_SpawnEvent() {
    this.initialize.apply(this, arguments);
}

Game_SpawnEvent.prototype = Object.create(Game_Event.prototype);
Game_SpawnEvent.prototype.constructor = Game_SpawnEvent;

Game_SpawnEvent.prototype.initialize = function(mapId,eventId,x,y,spawnEventId,saveEvent) {
	this._spawnX = x;
	this._spawnY = y;
	this._spawnEventId = spawnEventId;
	this.isSpawnEvent = true;
	this.isSavedEvent = saveEvent;
	Game_Event.prototype.initialize.call(this,mapId,eventId);
	DataManager.extractMetadata(this.event());
};

Game_SpawnEvent.prototype.event = function() {
    return $dataSpawnMap.events[this._spawnEventId];
};

Game_SpawnEvent.prototype.locate = function() {
	var x = this._spawnX;
	var y = this._spawnY;
    Game_Event.prototype.locate.call(this, x, y);
};

