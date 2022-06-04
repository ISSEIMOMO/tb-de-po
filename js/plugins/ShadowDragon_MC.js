// =================================================================== //
// ==========		Plugin Provided by ShadowDragon			========== //
// ========== 			     Menu Customiser 				========== //
// =================================================================== //
/*:
*
* @author ShadowDragon
* @plugindesc Customise your Menu in style
*
* @help
*
* First I like to thank TSR, the Northern Frog for his enormous help with the base code scripting,
* design and WITH authorization for use as a starters build to make this possible.
*
* Customise your Menu in style, it take a little time to set it up.
* It is userfriendly, even if you have no javascript knowledge, not even the basics.
* If you follow the instructions, it would be a piece of cake for everyone to do it.
*
* Compability issue's
* NOT COMPATABLE WITH TSR_TextColorAddon or anything that changes the command menu!
*
* Require images, (MAKE SURE YOU HAVE THEM OR THE GAME CRASH)
* - MainMenu  (background for buttons Command Window)
* - MM_ButtonSet  (Command Buttons)
* - GameEnd    (background for buttons GameEnd)
* - GE_ButtonSet  (Command Buttons)
* - ItemMenu  (Background for Scene_Item)
*
* HOW IT WORKS:
* 
* We start how the params exacly work before the rest.
* 
* <== ICONSETS ==>
* MM_ButtonSet and GE_ButtonSet control the buttons, create them as follows:
* "Activated", "Hover", "Disabled", "Hover Disabled", make buttons in a row of 4.
* create them in the order with the name on it, because it reads from top to bottom!
* Maximum of 10 buttons can be used!
*
* The Scenes need to be manually entered with a switch, or the command aren't shown.
* Samples scenes are on the bottom of this helpfile.
*
* For GameEnd, you need to make "Activated", "Hover",  2 buttons per row, so you have 6 buttons,
* - To Title (name it any way you like)
* - Shutdown (closes the game, name it how you like)
* - Return (name how you like, return to game)
* Those Commands are fixed values.
* 
* <== BACKGROUNDS ==>
* This require the background images "MainMenu" and "GameEnd" in any size (max size = game resulotion)
* Command Window BG Width places the X position, put 0 if using full resolution size.
* Example, Game resolution is 864x624 and your background as well, put 0 for X and Y,
* if your background is 200 x 300, adjust the x and y to center it, or on the place
* you want to set the window.
*
* Same thing is true for the GameEnd background. 
* 
* <== COMMAND SETTINGS ==>
* this part is interesting for both Main Menu and GameEnd, so pay attention. 
* Command Window X and Y place the command window where you want to set it,
* the Command Position Y is the button replacement, window and position Y
* are 2 totally different things!
*
* Spacing between buttons are how many space you want, buttons if you create them, have no spaces,
* so you can adjust it here, in case you make space when setting it up, make spacing 0.
* 
* <== Main Menu Setup ==>
* Command Scene 1 ~ 10 is the scene name you want to call.
* Command Switch 1 ~ 10 is the switch required to activate it.
* 
* You can not hide (disappear) buttons, or make them hidden ("????") and show, them!
* The commands are always visibles, either activated or disabled.
* All commmands require a switch, but can be the same, no switch and the command wont show.
* 
* In canse you want most buttons activated or all buttons at start, make a map start button,
* this can be ideal if you use intro switch, when an intro is over, use that switch = ON,
* the buttons are also activated by than. 
* 
* In case you want it disabled, use a different switch, switched can be the same for multiple
* buttons of the scenes.
* 
* Scenes that can be used on default:
* SceneManager.push(Scene_Item)
* SceneManager.push(Scene_Equip)
* SceneManager.push(Scene_Skills)
* SceneManager.push(Scene_Formation)
* SceneManager.push(Scene_GameEnd)
*
* Custom Scenes can also be used, depending the plugin you use.
* Read the helpfile for the scriptcall on how to open the scene inside their plugins.
*
* <== ITEM SCENE ==>
* Those params are a bit harderto setup, so you need to play around with them to get them right.
* default setup may be used, but the item Width, and item Height is what most would adjust.
*
* Window ItemList x,y,w,h can be setted through the params, x and y can use evals, or use flat numbers.
*
* ItemList Max Columns can be adjusted, Item Rect is something you need to play around,
* while it doesn't draw the item's Name, it fully icon based inventory, if you use 32x32 icons
* as default, item rect should be around 40, item rect always takes width and height at the same time.
*
* Icon position is to center it in the item rect, if it's 40, Icon position should be 4 (based on 32x32 icons)
* Text amound of x items (x7), the x position is on minus, 0 is far right side, y has +, 0 makes it to the
* top of the item, so x and y on 0 is top right corner.
*
* HelpWindow (Description window) is always in the center on X position, the Width adjust the X
* Automatically, while Y can be flat numbers as well for eval it.
*
* Item Display Window shows the Picture of the Item when hover it, place in the item notetag
* the following:  <display:pictureName>  PictureName is the image name in the picture folder.
*
* You can place the x and y position with numbers, or use eval, same with Width and Height.
*
* The Item Display Picture can have a offset to fit inside the window nicely, use numbers or eval.
*
* The Item Confirm Window reads the item Name, when you select the item for "Use " or "Don't use"
* followed by the item's name.
*
* you can even update the picture as you progress, a sample is below on how you can use it:
*
* You found a piece of a key, but broken in 4 bits. so picture 1 has a tiny bit of the key,
* when you got a 2nd piece, you can update the picture to have a large key, when you have
* all 4 keys bits, it shows the full key, or close to gether, to turn in, or make a new item,
* that show the repaired key.
*
* you can use the following scriptcall to update the picture:

*	let itemId = 1;  // ID in the items Database
*	let NewImage = "NEW PICTURE NAME"; // Name of the picture used
*	$gameSystem._itemDpPictures[itemId] = NewImage; // this will update the pictures ID.
*   
* Version + UPDATE'S
* 26-10-2020 Version 0.1.0 first release
* 16-04-2022 Version 0.2.1 small bug fix of overlapping "x" if number is higher than 9 (max 99)
*
* === WARNING ===
* THIS PLUGIN IS NOT PUBLIC, USING THIS WOULD BE ILLIGAL WITHOUT PERMISSION FROM SHADOWDRAGON
* CONTACT BEFORE USING: https://forums.rpgmakerweb.com/index.php?members/shadowdragon.130321/
*
* =========================================================
*
* @param <== ICONSETS ==> 
* @param => Command Window
* @parent <== ICONSETS ==>
* @param => GameEnd Window
* @parent <== ICONSETS ==>
*
* @param <== BACKGROUNDS ==>
* @param => Command Window BG
* @parent <== BACKGROUNDS ==>
* @param => GameEnd Window BG
* @parent <== BACKGROUNDS ==>
*
* @param <== COMMAND SETTINGS ==>
* @param => Main Menu
* @parent <== COMMAND SETTINGS ==>
* @param => GameEnd Menu
* @parent <== COMMAND SETTINGS ==>
*
* @param <== Main Menu Setup ==>
*
* @param <== INVENTORY ==>
* @param => ItemList
* @parent <== INVENTORY ==>
*
* @param <== EQUIP SCENE ==>
* @param => EquipList
* @parent <== EQUIP SCENE ==>
* 
* @param CM Icon Width
* @parent => Command Window
* @type number
* @desc Icon Width per button for Main Menu
* @default 320
* 
* @param CM Icon Height
* @parent => Command Window
* @type number
* @desc Icon Height per button for Main Menu
* @default 75
* 
* @param CM Icons Per Row
* @parent => Command Window
* @type number
* @desc Icons per Row (DO NOT CHANGE!)
* @default 4
* 
* @param GE Icon Width
* @parent => GameEnd Window
* @type number
* @desc Icon Width per button for GameEnd Menu
* @default 320
* 
* @param GE Icon Height
* @parent => GameEnd Window
* @type number
* @desc Icon Height per button GameEnd Menu
* @default 75
* 
* @param GE Icons Per Row
* @parent => GameEnd Window
* @type number
* @desc Icons per Row (DO NOT CHANGE!)
* @default 2
*
* @param Command Window X
* @parent => Main Menu
* @desc Command Window Horizontal Position
* @default 346
*
* @param Command Window Y
* @parent => Main Menu
* @desc Command Window Vertical Position
* @default 65
*
* @param Spacing Between Buttons
* @parent => Main Menu
* @type number
* @desc Space between buttons (see helpfile)
* @default 4
*
* @param Command Position Y
* @parent => Main Menu
* @desc change Y postion of the Command window
* @default 160
*
* @param Command Window BG Width
* @parent => Command Window BG
* @desc Size of background image Width
* @default 507
*
* @param Command Window BG Height
* @parent => Command Window BG
* @desc Size of background image Height
* @default 703
*
* @param GE Command Window X
* @parent => GameEnd Menu
* @desc Command Window X Position
* @default 346
*
* @param GE Command Window Y
* @parent => GameEnd Menu
* @desc Command Window Y Position
* @default 100
*
* @param GE Spacing Between Buttons
* @parent => GameEnd Menu
* @type number
* @desc Space between buttons (see helpfile)
* @default 4
*
* @param GE Command Position Y
* @parent => GameEnd Menu
* @desc change Y postion of the Command window
* @default 220
*
* @param GE Command Window BG Width
* @parent => GameEnd Window BG
* @desc Size of background image Width
* @default 507
*
* @param GE Command Window BG Height
* @parent => GameEnd Window BG
* @desc Size of background image Height
* @default 540
*
* @param Command Scene 1
* @parent <== Main Menu Setup ==>
* @desc Command Scene 1 (see helpfile)
* @default SceneManager.push(Scene_Equip)
*
* @param Command Switch 1
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 1
* @default 2
*
* @param Command Scene 2
* @parent <== Main Menu Setup ==>
* @desc Command Scene 2 (see helpfile)
* @default SceneManager.push(Scene_Item)
*
* @param Command Switch 2
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 2
* @default 1
*
* @param Command Scene 3
* @parent <== Main Menu Setup ==>
* @desc Command Scene 3 (see helpfile)
* @default SceneManager.push(Scene_Skills)
*
* @param Command Switch 3
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 3
* @default 2
*
* @param Command Scene 4
* @parent <== Main Menu Setup ==>
* @desc Command Scene 4 (see helpfile)
* @default SceneManager.push(Scene_Save)
*
* @param Command Switch 4
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 4
* @default 2
*
* @param Command Scene 5
* @parent <== Main Menu Setup ==>
* @desc Command Scene 5 (see helpfile)
* @default SceneManager.push(Scene_Load)
*
* @param Command Switch 5
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 5
* @default 2
*
* @param Command Scene 6
* @parent <== Main Menu Setup ==>
* @desc Command Scene 6 (see helpfile)
* @default SceneManager.push(Scene_GameEnd)
*
* @param Command Switch 6
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 6
* @default 1
*
* @param Command Scene 7
* @parent <== Main Menu Setup ==>
* @desc Command Scene 7 (see helpfile)
* @default 
*
* @param Command Switch 7
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 7
* @default 
*
* @param Command Scene 8
* @parent <== Main Menu Setup ==>
* @desc Command Scene 8 (see helpfile)
* @default 
*
* @param Command Switch 8
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 8
* @default 
*
* @param Command Scene 9
* @parent <== Main Menu Setup ==>
* @desc Command Scene 9 (see helpfile)
* @default 
*
* @param Command Switch 9
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 9
* @default 
*
* @param Command Scene 10
* @parent <== Main Menu Setup ==>
* @desc Command Scene 10 (see helpfile)
* @default 
*
* @param Command Switch 10
* @parent <== Main Menu Setup ==>
* @type number
* @desc Command Switch 10
* @default 
*
* @param ItemList X
* @parent => ItemList Window
* @desc The X position of the ItemList Window.
* @default 475
*
* @param ItemList Y
* @parent => ItemList Window
* @desc The Y position of the ItemList Window.
* @default 288
*
* @param ItemList W
* @parent => ItemList Window
* @desc The Width of the ItemList Window.
* @default 518
*
* @param ItemList H
* @parent => ItemList Window
* @desc The Height of the ItemList Window.
* @default 399
*
* @param Max Columns
* @parent => Max Columns & Item Rect
* @type number
* @desc Max Columns used in the ItemList Window.
* @default 4
*
* @param Item Rect
* @parent => Max Columns & Item Rect
* @type number
* @desc Item Width and Height used in ItemList Window.
* @default 121
*
* @param Cursor WH
* @parent => Items sizes
* @type number
* @desc Cursor Width and Height required for spacing between items (minus)
* @default 25
*
* @param Cursor Rect XY
* @parent => Items sizes
* @type number
* @desc Cursor X and Y position (plus)
* halve from Cursor WH required to center
* @default 12.5
*
* @param Icon XY
* @parent => Items sizes
* @type number
* @desc Icon Position X and Y inside Item Rect (plus)
* @default 20
*
* @param Icon Text Amount X
* @parent => Items sizes
* @type number
* @desc Amount of item X position (minus)
* @default -68
*
* @param Icon Text Amount Y
* @parent => Items sizes
* @type number
* @desc Amount of item X position (plus)
* @default 69
*
* @param Help Window X
* @parent => Help Window
* @desc Help Window X position
* @default (Graphics.boxWidth - ShadowDragon.MC._HWW) / 2;
*
* @param Help Window Y
* @parent => Help Window
* @desc Help Window Y position
* @default 181
*
* @param Help Window W
* @parent => Help Window
* @type number
* @desc Help Window Width
* @default 725
*
* @param Item Display Window X
* @parent => Item Display Window
* @desc Item Display Window X position
* @default 210
*
* @param Item Display Window Y
* @parent => Item Display Window
* @desc Item Display Window Y position
* @default 288
*
* @param Item Display Window W
* @parent => Item Display Window
* @desc The Width of the Item Display Window 
* @default 266
*
* @param Item Display Window H
* @parent => Item Display Window
* @desc The Height of the Item Display Window 
* @default 399
*
* @param Item Display Picture X
* @parent => Item Display Window
* @desc Picture offset X in Item Display Window 
* @default 48
*
* @param Item Display Picture Y
* @parent => Item Display Window
* @desc Picture offset Y in Item Display 
* @default 48
*
* @param Item Confirm Window X
* @parent => Item Display Window
* @desc Item Confirm Window X Position 
* @default (Graphics.boxWidth - this.width) / 2;
*
* @param Item Confirm Window Y
* @parent => Item Display Window
* @desc Item Confirm Window Y Position 
* @default 695
*
* @requiredAssets img/pictures/MainMenu
* @requiredAssets img/pictures/MM_ButtonSet
* @requiredAssets img/pictures/EquipScene
* @requiredAssets img/pictures/Eq_ButtonSet
* @requiredAssets img/pictures/GameEnd
* @requiredAssets img/pictures/GE_ButtonSet
* @requiredAssets img/picture/ItemMenu
*
*/

const _0x5d44=['yhRdTvi1W63dP8o3W55IWRLWWO8=','EWejWQeMWOKxdg3dL3vMeIW=','Dgv4DfbHzgrPBMC=','WRpdQdFdOSkk','W6vMWOXMWOS=','Bg9HzfbPy3r1CMu=','W5VdIv4KnYjvW61C','WRHHWRvbamkK','Item\x20Display\x20Window\x20H','q29TBwfUzcbqB3nPDgLVBIbz','trace','onActorOk','zNjHBwvi','W4Twu0lcNq==','xCkBqX3cQLS=','cCkGW6OIW68YWPiXxeRcTCoGpSovzdG/WQldSMC8ha==','w8oEW58/cW==','W4tdG2jkWQiTfutcR30NwSk4pSkiBwCpWOFdIf4=','CM\x20Icon\x20Height','W5KQW5HkafBdIe/cNCk8eeTS','y29TBwfUzeXPC3q=','W7hdO3bnWReUudW=','mmk0amoW','xmoRm2SYchBcKgCNoXzgW50=','textWidth','x2nTzfnJmW==','cancel','sxrLBuXPC3qGwq==','W6JdGvC5owZdLq==','ChjVDg90ExbL','yxbWBhK=','BwfRzuzVBNrcAwDNzxi=','x2nTzdq=','WPFdJCoZaCooWQJcIfL+mhhdP3OrrG==','_commandWindow','vxnLia==','xeLBn10=','zMDwv0C=','W7tdS2yj','WOXnWOCvwCkn','W57cJetcSwpcSJOCoa==','W60be8kjW4RdRmkc','x2nTzdm=','B0XYDw0=','makeFontBigger','jSkhnIOl','BCk4WQNcVGJdLrhdLSoDnq==','Shutdown','bind','WR5TW5X4aHD3WPRcIf9SWRldLa==','windowHeight','_cmdWindow_H','W6H2WPuTW70kWP9cWRxdUmoP','W5tdOKjtW7jC','_GEcmdWindow_H','xeLBmJHD','y29TBwfUzfrVvgL0Bgu=','setHandler','cmkLaYW3','x0Dfy21KmG==','ymodg2u+aKxcTwaWia==','WQNcOfxcU8kgCgX7xMS=','ssOUn','wxddRKSXW6ldRSoBW6XIWRb8WPtdNa==','createItemDisplaySprite','W5rlmwvH','qbahWRGjWPqada==','processDrawIcon','W6NdGg9LW6P6Cmk5DKm=','zxzHBenVBw1HBMq=','fIRcHILxWPFcPvzy','command6','W6DhqNNcNmknW7hcRSkqkKlcGqW=','ShadowDragon_MC','W4tcTmkNhMq=','W5bmuKDfWOVcVwFcJSoSW7hcTudcKLztD0jo','WOBdRalcTHxcKtJdLCog','\x5cI[35]','WOnOvvedWOfU','W5WPA8kDW4RdVqJdNCkOW7dcQ34dW54Nu8kO','W67cP8kLo0ZdMriYW4q=','WPXQw0yfWOfUtmk2','sbimV','WOmRCSoRWPxdTupcN8kuW4ldUmkDW5pdSCkqda==','evalCommand','_cmdSw8','yCk3FthcLG==','q29TBwfUzcbtD2L0y2GGnG==','C2Xyt28=','x2nTzfn3mta=','command2','C2v0qMfJA2DYB3vUzfr5Cgu=','x2fJDg9Yv2LUzg93','KdcpM','onCategoryOk','\x5cI[1]','x2nTzdG=','y29UC3rYDwn0B3i=','W5eEbrfbWQBcGW==','WOBcKSoxAa==','hSoCFmkoWRSoW4C=','B3bHy2L0Eq==','processEscapeCharacter','x0nswfK=','W6OaqCocWQr1jvhcPbO=','C2v0q3vYC29YuMvJDa==','x2nVBw1HBMrxAw5KB3C=','WQv0WRHhhmk1W7y8W6ZcOxhdISofWRze','pCooiKu=','WQVdP8ksW487WRVcKgVdOq==','uqLVX','FcKYWRud','WOBcICkKW4iSwSkfjSorACol','tQZrC','DCkKEW7cNa==','_itemWindow','W4iqeCkzW7BdU8ojWRq+','pSoOkCkZW40cW5xcTrFdTxJdVCk+zv0a','AmFGS','ESqce','W58TDCkzW4tdRdldNCkIW7C=','y29TBwfUzdeW','u8k+AKvlW6zZWPNcIq==','_CRXY','WRtcLSkVW6mH','xCkrqatcRKDrWP0=','W7JcVmk+o0RdGWWkW4rrWO5LWQG=','cmd5','ChjVy2vZC0rYyxDjy29U','zhjHD1rLEhq=','h8k3W6iRWOmFWPuNzepcVCo+DSoX','maxRows','DxnLCG==','q3vYC29YifDi','tSoVkv8QlW==','\x5cI[11]','q29TBwfUzcbty2vUzsa1','x2n1CNnVCKfSBa==','g8kOhJ4/rCkIWQvKwG==','zhjHD0LJB24=','left','zvz5AuW=','WLhGF','Command\x20Switch\x204','W6S2sSo1WPe=','W5SmgSkiW6e=','hSo4vmkjWOujWQ7cPCo6WOi=','v3LtqNq=','AwnVBKLUzgv4','omopkepcJCoLW5ntW6i=','_cmdWindow_x','WRr3WOvdpa==','WO9NWRfcxG==','q29TBwfUzcbxAw5KB3CGwa==','WOtdNCkQW6W=','_confirmWindow','Dg9Wsw5KzxG=','W7alqSkBW4tdRrhdKCk+W6dcH2yXW4S=','s8kLyvq=','_INrY','createCommandWindow','WRldOd/dO8kh','xeLBmZLD','sWasWQ4PWO4GeLNdN2TNltOTBa0=','qxjODuy=','W6JdGvuWb27cGSkGlmoth8ogW4G7','cmk7ct4Mrq==','omk5smk+aG==','WPRcHCoxySoEbW==','WOBdM8o4omoaWRxcN2P0','eAYMQ','Item\x20Confirm\x20Window\x20Y','x2nTzfn3nG==','_itemName','iCk1wWGsW6yjnCofWRCtc8o/b8oWW47dS39KWOO=','W7KtvSocWR11gedcSWrhWOtdN8o4WOtcSvrEWRPBW7S0eG==','WR/cT13cSSkzEIO=','aSothSkfW7e=','zgvHy3rPDMf0zq==','f8oEkLpdLq==','cmd2','\x5cI[25]','W6n1WO9NWOfhW74/rG==','q29TBwfUzcbtD2L0y2GGoq==','x2HLBhbxAw5KB3C=','EgzqANe=','v1PwB00=','itemHeight','r3LWC3m=','W6RcTCoxW7WuWQBdTW7dOSofWQFdLCkEW6W=','start','W57cJetcPMpcRa4ApCo8EmoNW7dcKSomWOL2W4nYxmoBWQtdJmkS','x3DPBMrVD0n1CNnVCLnWCML0zq==','W6RdHgLnW7n6Aq==','x2L0zw1eCe5HBwu=','W73dK3XZW45RyCkX','Cg9W','W5edeSkb','Aw5WDxr0Aw5Nqwn0Aw9U','W6NcVmkUo0S=','lCkzW4i7WP0=','WPaREmo+WO7dPhpcM8ku','x3nJCM9SBfK=','y21Kmq==','Aw5PDgLHBgL6zq==','WRdcOCkiW7Wp','command7','x2jHy2TNCM91BMrtChjPDgu=','q29TBwfUzcbtD2L0y2GGnq==','FmkBthvZ','ExHfu1C=','cmd3','GEframeH','W7ene8kaW7JdOCouW6qiWQOQhCorWOD7','W5r6WO4SW7OxWPHZWQtdTmoV','concat','yMhdOfevW7FdPCosW7v+WRn6WP7dMq==','zNjHBwvx','W7Sfv8o0WQb+nvVcOq==','WO08ESoOWOtdONK=','y3jLyxrLsxrLBunVBMzPCM1xAw5KB3C=','y21KnW==','BMfTzq==','value','bSkimSokWOeorZ7dHCkMWOP4W4KufaG=','WRJdQWVcHs/cNg3cIG==','stop','x2nTzfn3na==','GE_ButtonSet','yMhdOfelW6RdRSoBW5r8WPX5WPJdGbZdJSkwDmkHWQa=','W5lcUComW74=','W5JcLcuwWRpcMmoGW7m=','W6NdJ2jAWR0uxaxdQtj7','YbsSk','x2nTzfn3mW==','TREgo','uXhbj','_cmd2','drawItem','WQzyaCkC','WP99qgylWODWwCkN','y29TBwfUzeDHBwvfBMq=','zhRdR0i=','y29TBwfUzdK=','_cmdSw2','x0Dfy21Kv2LUzg93x0G=','W7NcOwC5WOO=','W6OpcqjgWRtdIhC=','cmoCFSkeW4G1WQC=','g8k7aYS9vmkVWRbZ','loadPicture','W4BdH2rEWR0Mqq7dVY4=','x2nTzfnJnG==','CJ3dHabVWQGNWP/cNSk0','onSelectAction','bmkxuCk0hq==','W5alemkj','_GEcmdLineHeight','WQ3cQCoUxCoV','\x5cI[4]','x2nTzfn3mq==','fadeOutAll','W6dcRNe9WP/dP8oVgqtdOW==','\x5cI[26]','q29TBwfUzcbty2vUzsa2','COHmn','item','tSkmqH3cOf1mW5ua','WO04B8oAWOddT2/cOSkfW4RdGSkh','WOrlbmkrla==','DcaZV','x0Dfy21Kmq==','Command\x20Scene\x208','createItemWindow','twfPBK1LBNu=','x1Djq1K=','zMXVB3i=','W74euSoaWR15j1xcOGW=','h8kDjCogWRGkqtZdKSkH','WR/cT13cSSkDChfRevtdVCoV','\x5cI[23]','WOtdTSksW5y5WQ7cH3/dK1VcMsKlDG==','WQddOtfYW4m=','AxrLBuHLAwDODa==','y21KnG==','ywrKv2LUzg93','umkPAvrhW6y=','W7COgHHZ','addCommand','commandToTitle','x2nTzfn3nW==','wLRdMHvOW54=','WO5XwLy=','q1r5q2G=','AxrLBq==','createWindowLayer','DCZrq','yghdOeS5W5q=','nRiJk','othcNtHvWQFcTvvnW5uThq==','QpQVu','x1DjrfG=','W6NcN8oJWQGK','WQtcU17dSCk+owP8gWm=','q29TBwfUzcbtD2L0y2GGmq==','WQpdPGJcGGW=','W7CAA8krW6O=','_cmdSw5','u2HHzg93rhjHz29Uie1d','nmopDCklWPWiWQ7cPSoOWRJdOw3dSCo/Aq==','maxItems','WQbLWQ5hbCk1W5i1W7/cSq==','x2nTzfnJoa==','W5pdH1S+hMBcMSkLd8oF','WQjdWPfvvG==','yMX0','W5Ohf8kkW7hdUW==','W7y+W5PpdeFdMwNcMSk9','activate','sSkBvr3cMebrW5en','x1Djrfby','AxngB3jgCMLLBMq=','commandList','x2nTzdeW','y2HHBMDLvgv4DenVBg9Y','j8oFm1BcI8o/W69qW6tdGbCKWR7dILnWW7S=','W5SZEmoMWQG=','nSkHC8ksaNG9D8koW67dUmkwW6/cNKa=','x1Djrfbz','Bwf4ugfNzuL0zw1Z','CeddHw4Q','WO9QuvmEWPbwx8kNWPWgW6ObW4fdoCox','W6pcOwiSWRtdRCoPpHFdS33cKe7dU8kvW4Se','_ILH','tunFr1nFAw5PDa==','W6JdI044b0hcJCkPhG==','sxrLBsbeAxnWBgf5ifbPy3r1CMuGwa==','r2fTzuvUza==','x2L0zw1eCfbPy3r1CMvZ','W6dcVwWOWP3dTSoIdbm=','WRvlaSkef8kJWQymcW==','W5Dnw1FcImkrW6BdOCkXg0lcJb0jW5i=','xeLBmJfD','qKjPD3q=','WPFdUGNcLrpcIYxdISou','WQXDlGpdQmk9WPFdPa==','W6uTW41pfuFdR23cI8kLbfzXWRtdJCk3','WQzBlG/dJSk9WR3dPmolW67dLtCsiSoMpmkyW613uSo5ENu=','prototype','CMvZzxruzxH0q29SB3i=','fmo4umk5WQO=','JFGue','WQzijq3dN8k0','BCkRWRtcQWRdHbZdG8ok','WPFdQrtcGbhcMIJdN8odW7a=','xeLBmL0=','_cmd7','AgvPz2H0','t21oqvu=','WQb2WRnsb8kKW58GW6G=','WPVcLmoBAmoHgMlcRmkN','C3bSAxq=','ARKEa','_WICX','W60CbbK=','_cmd4','DTueL','x2nTzfnJmq==','W6bGfNbc','Help\x20Window\x20W','x2nVBMzPCM1xAw5KB3C=','k8oskLRcG8o/W44u','BqejWQfGWRqagu7cNLPVeI4XEuaD','x0Dfy21Kv2LUzg93x1C=','WOBcHCogCCoHgMlcRmkN','W4JcUs8xWQ4=','W4ZcHLHUW4ddNW==','xeLBmtbD','frameW','Command\x20Window\x20Y','u2H1DgrVD24=','y2vUDgvY','x0Lmsa==','W7pcOMDL','vNzxuxy=','_itemDpSprite','y2fUy2vS','WOm4E8oM','W6ZdULyzoW==','ChvZAa==','EWelWQSxWOKlbvxdIur7','Exz1C0S=','yCk9FZ7cHW==','DgvZDa==','WQ3cG8otyCoLbdm=','y2VdQfi=','DxbKyxrLugXHy2vTzw50','dtiUH','r0vMCMfTzuG=','EWelWQStWPDD','x3vWzgf0zun1CNnVCG==','q29TBwfUzcbty2vUzsa5','W7RdK3HLW7n6rSk9z1SvASoAW4CKDa==','GEcommandList','WQXokI3dVa==','DMfSDwu=','C2v0q2f0zwDVCNK=','W7pcRM8W','hSoCFmkoW50=','mCkJAW==','processCancel','f8kLDrKZW6nE','nSowDCkEWOa=','CgXHEunHBMnLBa==','c8oWz37cGCo+W4rqWQFdSqiZW47dUu5M','mSk0FCkAcNGNzSkjW6ldVG==','A2v5sxrLBq==','WOpcOCoxtCo3','mCo1lCk2W6KoW77cPa7dT0O=','W658bwHN','_cmdSw10','W5BcPmoDW7anWQldKb7dKmobWORdNSkFW73cSSo8uSk8W4FdHdnEgG==','_GEcmdWindow_y','W40sbrHZWR/dLcpcS0ZcH8oYWOjoW5RdOW==','WO1sWPnfdGXGW4RcUG==','aSo5iCk2W6OqWQK=','qSk6WRBcU1W=','display','GE\x20Command\x20Window\x20BG\x20Width','WPPGbZC=','_cmdSw6','xeLBmtvD','changeTextColor','qbahWRGuWOuDfx/dHG==','swnVBIbuzxH0iefTB3vUDcby','W6dcQM/cTKxcOsO=','xIHBxIbDkYGGk1TEif0RksSPk1TEif19','sfLWvgO=','_ILW','center','WRhdRmoXpSooWQZcG00=','W7mfxmokWP7dLa==','sxrLBsbeAxnWBgf5ifDPBMrVDYby','_cmd5','E8oOW6qgp8k/WRhdUL/cNW==','W6NdK3jWW6HRFCkSyq==','W7rMh2LlWOJcTdu=','WQVdTmkpW5O5WQRcNx7dTKe=','table','BNvTvMLZAwjSzvjVD3m=','W53cUSkNiKldGW9IW7jpWOb5WR9vWPxdIa==','WPpcSvZcS8kPBvPHg07dM8oeWOrVWP9fWOhdSxa9','Cw9Xruu=','_HWX','W7tdUgmiaq==','lineHeight','WQ7dS8k+W7mU','C2v0sgfUzgXLCG==','W4RdN1utnZTbW7XxWQa=','W4xdJLWzldnbW64=','setItem','blt','selectNextCommand','x0Lmwa==','sxrLBuXPC3qGwa==','C3rHCNq=','resetTextColor','B25jDgvTu2vSzwn0','height','frameH','WQBcICkKW4iSwSkfsSoRECoAkSkTWR7dH1q=','D2LUzg93v2LKDgG=','vfnsx1rLEhrdB2XVCKfKze9U','W5/dKNnsWP8O','DwfTwfK=','vwPwDhe=','W6S1irjx','drawAllItems','Command\x20Switch\x2010','WQNdISo6kmkC','LdNaQ','console','ywrKq29TBwfUza==','hLYPv','\x5cI[16]','xeLBnf0=','W75uwftcNa==','W7mpwSoxWQbXpv3cRaW=','command1','_cursorRect','_MaxC','h8ktW4OSWQisW4K=','bmkTD8ktiq==','_GEcmdWindow_W','W7b1WOvYWPPwW4qGtLDHnfxcHhZdGCoJWPv4','W7lcPM04','cmd7','WPldOCkyW5yzWQRcH24=','addChild','x0LoCLG=','isForOpponent','W4/cMeOFWQO=','W4NcM1hcKKxcOqCD','xeLBm10=','W6NdHxTBWOmGaq==','_itemDisplay','refreshItemDisplay','yes','W5KLDmkrW4VdPsm=','Axndyw5JzwXfBMfIBgvK','CgfYyw1LDgvYCW==','qcEvU','xeLBmZnD','k8oqiWBdKG==','floor','x2nTzfnJna==','makeCommandList','hmkzi8oUWQekwbFdGCk/WQ4=','CMv0DxjUicHMDw5JDgLVBIGPia==','sxrLBuXPC3qGvW==','_animationCount','qWyVX','W4BdGNbGW5r8mG==','ugXsCu0=','WPLGef/cJSkf','W4lcI0tcHgxcRcSCi8o+xCo9W47cL8orWP9l','otVcHdLVWORcSKjsW44tla==','xeLBmtjD','parameters','q29TBwfUzcbty2vUzsa3','CmojaKSQhLlcLNSrmqjT','push','EWSsWQOTWQqmeKRdKNP7','x1DjreG=','WPhdGGJcUc3dQaJdTWe=','omkVDCkAjxK3oG==','rplJz','WPtcU2tcV8k+DxO=','xeLBmZDD','W7lcIL3cGt0=','oSoyiuxcH8oIW4i=','opacity','playBuzzerSound','_cmd1','W6S+W4nliK3dGghcICkGb2H3WRldLW==','W6JdPx8+b2VdNq==','WOtcPLhcOCkEFgD7o1S=','s8kosqJcU0X8W5eaWROVzCkNDCkmWOJcG2/cVmkqjGKF','x2nTzdy=','W40sbrHZWR/dLcpcS1JcI8oOWOqgW4K=','currentData','ywn0AxzHDgvjDgvTv2LUzg93','y2fSBa==','drawItemName','W7ddKw8=','QUrmq','r0zvruu=','Command\x20Scene\x201','C8oEgwS6h1lcVhOGnrf8W6DuCLddQmkIwZHf','drawWindowBackground','contents','WPRdNHldK8k/WRS=','_scrollX','W7e2W4zkdLxdPwNcGCkPc1a=','WRjOWQG=','command3','_cmdSc6','BMvLzhnoDw1Izxi=','q3fbthm=','W73cVNNcVvu=','W7RcNYW4WRRcN8oOWRC+tx9SW7jahc0=','Cg9Wu2nLBMu=','x2L0zw1xAw5KB3C=','Bg9N','W5BcUCovW7WyWQNdVsBdNmoFWR0=','W7lcK8orW6el','call','GAgIc','ENjOwhu=','x2nTzfnJnq==','WOxcOLhcUSkjDNjIh03dHG==','KvNrs','sBeYH','W4pdLxn2WQqMwa==','setConfirmWindowPosition','x2nTzfnJnW==','C2vSzwn0','zhjHD0fSBeL0zw1Z','renACNe=','_backgroundSprite','WPRdJH7dTmkcWOzn','sxrLBsbeAxnWBgf5ifDPBMrVDYbx','y3jLyxrLq29TBwfUzfDPBMrVDW==','W6pcU2WS','XblNn','Help\x20Window\x20X','WPfiWRzpjW==','xt/dMqXVWQW9WP7cU8kUW6PxvCor','isCommandEnabled','W4FcGmkNivK=','WQNdISo6kmo8WQldKG==','WRjTWRjc','x2nTzfnJmG==','create','DMhdRLiZW7FdUCopW54=','W5bmuK1jWONcVIBcQmoTWRJcHuhcIa==','BsZdLWjRWRKQ','x2L0zw1oyw1L','x2nTzfn3oa==','refresh','tu1FqNv0Dg9Uu2v0','pGwfF','WO9nWPb/','W4BdLhLlWR83tbVdQa==','\x5cI[17]','onCancelAction','u3bHy2LUzYbczxr3zwvUiej1DhrVBNm=','pJmIY','W4dcNmklECkbdZlcPmo5fmkkW7bpd8ksiCkCr8oIW4hdGgK=','q29TBwfUzcbtD2L0y2GGmG==','WOtdVmkjW545WPJcGhxdOf3cGa==','WR86ESoUW5u=','yMLUza==','_cmdSc9','AxrLBvjLy3q=','WOlcKSorCCozb3/cQmkQ','_GEcmd3','otVcHJbvWOlcSKjQW5aIamoFWOy=','W601n8kPW5e=','x2L0zw1eAxnWBgf5','WRRcR8khW50u','x2nTzfDPBMrVD195','_cmdSw9','W7tdMfW0cZuu','updateItemDisplaySprite','r0uGq29TBwfUzcbxAw5KB3CGwq==','BwvTyMvYCW==','r0uGq29TBwfUzcbqB3nPDgLVBIbz','needsSelection','WOldMaFcLqW=','warn','W7vguNNcHSksW6/cOmkmha==','WQ3cG8otyCoLbd8=','updateInputData','W4jGWQ4zW4e=','C2v0sxrLBu5HBwu=','y29UC29Szq==','_cmdSc3','xeLBnL0=','W5RcUmoXW6uCWQRdLGe=','isForFriend','WRxdUZtdO8kaWPygWOrQ','y21Koa==','WPRcICoAya==','hCk5xmkXhG==','D2LKDgG=','sgvSCcbxAw5KB3CGwq==','WPPqgCkvfCktWQ8VhSkZyc1q','CKT1DKO=','width','tg9eC0u=','updatePlacement','MC_WIL_s','W4WJACklW53dUZpdM8kKW6VcMG==','obtainEscapeParam','nCkLhSotWQe=','C2v0sgvSCfDPBMrVDW==','h8k9W7SQWQiYWOSrxftcVCoTEW==','amo3ehJcHq==','C2v0sxrLBu9IAMvJDa==','zhvtvMS=','y3jLyxrL','WOldNWRcOspdSHxcVW==','WRZcNwVdPCkx','WR3cJ8kUW7yc','W70yhd1ZWR/dLg/cHuK=','cmd9','mSk0FCkAc3W=','WPJdOmkpW4G7WR3dIuNdOvhcG208wa==','mmkvi8ocWRG4xdFdHmk9WRW=','W7FcU8kJo0RdJaCRW5TD','B3bLBM5LC3m=','CMvMCMvZAa==','y2XVC2u=','bQjsQ','W49wWPCoW6S=','W6bxWPy7W5O='];(function(_0x4215ea,_0x2c25c5){const _0x5d4470=function(_0x530b3b){while(--_0x530b3b){_0x4215ea['push'](_0x4215ea['shift']());}},_0x506074=function(){const _0x1ac7b0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x146eb7,_0x576b4b,_0x2b513d,_0x3e8fa3){_0x3e8fa3=_0x3e8fa3||{};let _0x156e60=_0x576b4b+'='+_0x2b513d,_0x9ee3d0=0x0;for(let _0x648ba0=0x0,_0x5c2f47=_0x146eb7['length'];_0x648ba0<_0x5c2f47;_0x648ba0++){const _0x2957f1=_0x146eb7[_0x648ba0];_0x156e60+=';\x20'+_0x2957f1;const _0x5e4faa=_0x146eb7[_0x2957f1];_0x146eb7['push'](_0x5e4faa),_0x5c2f47=_0x146eb7['length'],_0x5e4faa!==!![]&&(_0x156e60+='='+_0x5e4faa);}_0x3e8fa3['cookie']=_0x156e60;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1f6464,_0x32c1d0){_0x1f6464=_0x1f6464||function(_0x36ba4b){return _0x36ba4b;};const _0x479ae4=_0x1f6464(new RegExp('(?:^|;\x20)'+_0x32c1d0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3f13f9=function(_0x14af79,_0x5d7a47){_0x14af79(++_0x5d7a47);};return _0x3f13f9(_0x5d4470,_0x2c25c5),_0x479ae4?decodeURIComponent(_0x479ae4[0x1]):undefined;}},_0x4491f1=function(){const _0x57f803=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x57f803['test'](_0x1ac7b0['removeCookie']['toString']());};_0x1ac7b0['updateCookie']=_0x4491f1;let _0x2ee771='';const _0x168293=_0x1ac7b0['updateCookie']();if(!_0x168293)_0x1ac7b0['setCookie'](['*'],'counter',0x1);else _0x168293?_0x2ee771=_0x1ac7b0['getCookie'](null,'counter'):_0x1ac7b0['removeCookie']();};_0x506074();}(_0x5d44,0x190));const _0x5060=function(_0x4215ea,_0x2c25c5){_0x4215ea=_0x4215ea-0x182;let _0x5d4470=_0x5d44[_0x4215ea];return _0x5d4470;};const _0x530b=function(_0x4215ea,_0x2c25c5){_0x4215ea=_0x4215ea-0x182;let _0x5d4470=_0x5d44[_0x4215ea];if(_0x530b['xirTmL']===undefined){var _0x506074=function(_0x1ac7b0){const _0x4491f1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x2ee771=String(_0x1ac7b0)['replace'](/=+$/,'');let _0x168293='';for(let _0x146eb7=0x0,_0x576b4b,_0x2b513d,_0x3e8fa3=0x0;_0x2b513d=_0x2ee771['charAt'](_0x3e8fa3++);~_0x2b513d&&(_0x576b4b=_0x146eb7%0x4?_0x576b4b*0x40+_0x2b513d:_0x2b513d,_0x146eb7++%0x4)?_0x168293+=String['fromCharCode'](0xff&_0x576b4b>>(-0x2*_0x146eb7&0x6)):0x0){_0x2b513d=_0x4491f1['indexOf'](_0x2b513d);}return _0x168293;};_0x530b['zpwHJD']=function(_0x156e60){const _0x9ee3d0=_0x506074(_0x156e60);let _0x648ba0=[];for(let _0x5c2f47=0x0,_0x2957f1=_0x9ee3d0['length'];_0x5c2f47<_0x2957f1;_0x5c2f47++){_0x648ba0+='%'+('00'+_0x9ee3d0['charCodeAt'](_0x5c2f47)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x648ba0);},_0x530b['BSmeub']={},_0x530b['xirTmL']=!![];}const _0x530b3b=_0x530b['BSmeub'][_0x4215ea];if(_0x530b3b===undefined){const _0x5e4faa=function(_0x1f6464){this['UViJXj']=_0x1f6464,this['gAhcqn']=[0x1,0x0,0x0],this['mEgoqG']=function(){return'newState';},this['IFUiMa']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['AtOuqp']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5e4faa['prototype']['HBTugW']=function(){const _0x32c1d0=new RegExp(this['IFUiMa']+this['AtOuqp']),_0x479ae4=_0x32c1d0['test'](this['mEgoqG']['toString']())?--this['gAhcqn'][0x1]:--this['gAhcqn'][0x0];return this['IUEUVR'](_0x479ae4);},_0x5e4faa['prototype']['IUEUVR']=function(_0x3f13f9){if(!Boolean(~_0x3f13f9))return _0x3f13f9;return this['WzBAAu'](this['UViJXj']);},_0x5e4faa['prototype']['WzBAAu']=function(_0x36ba4b){for(let _0x14af79=0x0,_0x5d7a47=this['gAhcqn']['length'];_0x14af79<_0x5d7a47;_0x14af79++){this['gAhcqn']['push'](Math['round'](Math['random']())),_0x5d7a47=this['gAhcqn']['length'];}return _0x36ba4b(this['gAhcqn'][0x0]);},new _0x5e4faa(_0x530b)['HBTugW'](),_0x5d4470=_0x530b['zpwHJD'](_0x5d4470),_0x530b['BSmeub'][_0x4215ea]=_0x5d4470;}else _0x5d4470=_0x530b3b;return _0x5d4470;};const _0x1ac7=function(_0x4215ea,_0x2c25c5){_0x4215ea=_0x4215ea-0x182;let _0x5d4470=_0x5d44[_0x4215ea];if(_0x1ac7['JPFFiU']===undefined){var _0x506074=function(_0x4491f1){const _0x2ee771='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x168293=String(_0x4491f1)['replace'](/=+$/,'');let _0x146eb7='';for(let _0x576b4b=0x0,_0x2b513d,_0x3e8fa3,_0x156e60=0x0;_0x3e8fa3=_0x168293['charAt'](_0x156e60++);~_0x3e8fa3&&(_0x2b513d=_0x576b4b%0x4?_0x2b513d*0x40+_0x3e8fa3:_0x3e8fa3,_0x576b4b++%0x4)?_0x146eb7+=String['fromCharCode'](0xff&_0x2b513d>>(-0x2*_0x576b4b&0x6)):0x0){_0x3e8fa3=_0x2ee771['indexOf'](_0x3e8fa3);}return _0x146eb7;};const _0x1ac7b0=function(_0x9ee3d0,_0x648ba0){let _0x5c2f47=[],_0x2957f1=0x0,_0x5e4faa,_0x1f6464='',_0x32c1d0='';_0x9ee3d0=_0x506074(_0x9ee3d0);for(let _0x3f13f9=0x0,_0x36ba4b=_0x9ee3d0['length'];_0x3f13f9<_0x36ba4b;_0x3f13f9++){_0x32c1d0+='%'+('00'+_0x9ee3d0['charCodeAt'](_0x3f13f9)['toString'](0x10))['slice'](-0x2);}_0x9ee3d0=decodeURIComponent(_0x32c1d0);let _0x479ae4;for(_0x479ae4=0x0;_0x479ae4<0x100;_0x479ae4++){_0x5c2f47[_0x479ae4]=_0x479ae4;}for(_0x479ae4=0x0;_0x479ae4<0x100;_0x479ae4++){_0x2957f1=(_0x2957f1+_0x5c2f47[_0x479ae4]+_0x648ba0['charCodeAt'](_0x479ae4%_0x648ba0['length']))%0x100,_0x5e4faa=_0x5c2f47[_0x479ae4],_0x5c2f47[_0x479ae4]=_0x5c2f47[_0x2957f1],_0x5c2f47[_0x2957f1]=_0x5e4faa;}_0x479ae4=0x0,_0x2957f1=0x0;for(let _0x14af79=0x0;_0x14af79<_0x9ee3d0['length'];_0x14af79++){_0x479ae4=(_0x479ae4+0x1)%0x100,_0x2957f1=(_0x2957f1+_0x5c2f47[_0x479ae4])%0x100,_0x5e4faa=_0x5c2f47[_0x479ae4],_0x5c2f47[_0x479ae4]=_0x5c2f47[_0x2957f1],_0x5c2f47[_0x2957f1]=_0x5e4faa,_0x1f6464+=String['fromCharCode'](_0x9ee3d0['charCodeAt'](_0x14af79)^_0x5c2f47[(_0x5c2f47[_0x479ae4]+_0x5c2f47[_0x2957f1])%0x100]);}return _0x1f6464;};_0x1ac7['fZANlE']=_0x1ac7b0,_0x1ac7['PWXWFa']={},_0x1ac7['JPFFiU']=!![];}const _0x530b3b=_0x1ac7['PWXWFa'][_0x4215ea];if(_0x530b3b===undefined){if(_0x1ac7['vAEvlo']===undefined){const _0x5d7a47=function(_0x57f803){this['OlnmdZ']=_0x57f803,this['hRXifn']=[0x1,0x0,0x0],this['mlHQyC']=function(){return'newState';},this['XAFQwE']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['RBGAMg']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5d7a47['prototype']['aRYRWf']=function(){const _0x294de8=new RegExp(this['XAFQwE']+this['RBGAMg']),_0x427e7c=_0x294de8['test'](this['mlHQyC']['toString']())?--this['hRXifn'][0x1]:--this['hRXifn'][0x0];return this['eneAEL'](_0x427e7c);},_0x5d7a47['prototype']['eneAEL']=function(_0x54c850){if(!Boolean(~_0x54c850))return _0x54c850;return this['btorON'](this['OlnmdZ']);},_0x5d7a47['prototype']['btorON']=function(_0xea3244){for(let _0x2bce80=0x0,_0x32e236=this['hRXifn']['length'];_0x2bce80<_0x32e236;_0x2bce80++){this['hRXifn']['push'](Math['round'](Math['random']())),_0x32e236=this['hRXifn']['length'];}return _0xea3244(this['hRXifn'][0x0]);},new _0x5d7a47(_0x1ac7)['aRYRWf'](),_0x1ac7['vAEvlo']=!![];}_0x5d4470=_0x1ac7['fZANlE'](_0x5d4470,_0x2c25c5),_0x1ac7['PWXWFa'][_0x4215ea]=_0x5d4470;}else _0x5d4470=_0x530b3b;return _0x5d4470;};const _0x201252=_0x5060,_0x55f923=_0x1ac7,_0x205b7f=_0x530b,_0x3e8fa3=function(){let _0x186939=!![];return function(_0x2b13bc,_0x3836be){const _0x5beabb=_0x186939?function(){if(_0x3836be){const _0x592e3b=_0x3836be['apply'](_0x2b13bc,arguments);return _0x3836be=null,_0x592e3b;}}:function(){};return _0x186939=![],_0x5beabb;};}(),_0x2b513d=_0x3e8fa3(this,function(){const _0x566b18=_0x530b,_0x515d11=_0x1ac7,_0x20ccd9={'YnMcC':_0x515d11(0x2b2,'l2&T'),'bQjsQ':_0x566b18(0x1a6)},_0x43d6ef=function(){const _0x1db4a6=_0x566b18,_0x515f70=_0x5060,_0x56893a=_0x515d11,_0x535fd0=_0x43d6ef[_0x56893a(0x289,'p&fV')](_0x20ccd9['YnMcC'])()['constructor'](_0x20ccd9[_0x515f70(0x29e)]);return!_0x535fd0[_0x1db4a6(0x42a)](_0x2b513d);};return _0x43d6ef();});_0x2b513d();const _0x168293=function(){let _0x399947=!![];return function(_0x9bc64,_0x2681aa){const _0xda560=_0x399947?function(){if(_0x2681aa){const _0x4f5643=_0x2681aa['apply'](_0x9bc64,arguments);return _0x2681aa=null,_0x4f5643;}}:function(){};return _0x399947=![],_0xda560;};}(),_0x2ee771=_0x168293(this,function(){const _0x5c58f7=_0x1ac7,_0x1a1e03=_0x5060,_0x5bf6e1=_0x530b,_0x1c8ef1={'nRiJk':function(_0x12814b,_0xb68ab2){return _0x12814b+_0xb68ab2;},'uqLVX':_0x5bf6e1(0x1f8),'uXhbj':'{}.constructor(\x22return\x20this\x22)(\x20)','CTyCh':function(_0x20c58d){return _0x20c58d();},'rplJz':_0x5bf6e1(0x22f),'mPlsN':_0x1a1e03(0x272),'YbsSk':'info','jCKVD':_0x1a1e03(0x1b2),'IyUGH':_0x1a1e03(0x2ab),'yuwlM':function(_0x41180c,_0x436c39){return _0x41180c<_0x436c39;}};let _0x1ade03;try{const _0x56acfd=Function(_0x1c8ef1[_0x1a1e03(0x3cb)](_0x1c8ef1[_0x1a1e03(0x30f)],_0x1c8ef1[_0x1a1e03(0x38d)])+');');_0x1ade03=_0x1c8ef1[_0x5bf6e1(0x3c6)](_0x56acfd);}catch(_0x3704c7){_0x1ade03=window;}const _0x154953=_0x1ade03[_0x5bf6e1(0x278)]=_0x1ade03[_0x1a1e03(0x1d3)]||{},_0x3ca5cd=[_0x1c8ef1[_0x1a1e03(0x20a)],_0x1c8ef1['mPlsN'],_0x1c8ef1[_0x1a1e03(0x38a)],'error','exception',_0x1c8ef1['jCKVD'],_0x1c8ef1[_0x5c58f7(0x276,'jp@@')]];for(let _0x2d58ac=0x0;_0x1c8ef1[_0x5c58f7(0x195,'LDW2')](_0x2d58ac,_0x3ca5cd['length']);_0x2d58ac++){const _0x153317=_0x168293[_0x5c58f7(0x2d5,'jp@@')][_0x1a1e03(0x3fd)]['bind'](_0x168293),_0xfb98a1=_0x3ca5cd[_0x2d58ac],_0x44aa7c=_0x154953[_0xfb98a1]||_0x153317;_0x153317['__proto__']=_0x168293['bind'](_0x168293),_0x153317['toString']=_0x44aa7c['toString'][_0x5c58f7(0x3a1,'&GT5')](_0x44aa7c),_0x154953[_0xfb98a1]=_0x153317;}});_0x2ee771();var Imported=Imported||{};Imported[_0x205b7f(0x3d5)]=_0x55f923(0x3bb,'K^GX');var ShadowDragon=ShadowDragon||{};ShadowDragon['MC']=ShadowDragon['MC']||{},ShadowDragon[_0x201252(0x202)]=PluginManager[_0x55f923(0x3b7,'Ha$t')](_0x201252(0x2ea)),ShadowDragon['MC'][_0x205b7f(0x37a)]=Number(ShadowDragon[_0x55f923(0x1ae,'#qvx')][_0x55f923(0x2d2,'CN76')]),ShadowDragon['MC'][_0x205b7f(0x2ad)]=Number(ShadowDragon['parameters'][_0x201252(0x2b3)]),ShadowDragon['MC'][_0x55f923(0x21c,'Ju#F')]=Number(ShadowDragon['parameters'][_0x55f923(0x190,'3n4K')]),ShadowDragon['MC']['GEframeW']=Number(ShadowDragon[_0x55f923(0x3a7,'K^GX')]['GE\x20Icon\x20Width']),ShadowDragon['MC'][_0x205b7f(0x42f)]=Number(ShadowDragon[_0x205b7f(0x1f0)][_0x55f923(0x24f,'LDW2')]),ShadowDragon['MC'][_0x55f923(0x231,'e85J')]=Number(ShadowDragon[_0x201252(0x202)]['GE\x20Icons\x20Per\x20Row']),ShadowDragon['MC']['_cmdWindow_W']=String(ShadowDragon[_0x205b7f(0x1f0)]['Command\x20Window\x20BG\x20Width']),ShadowDragon['MC'][_0x201252(0x2d4)]=String(ShadowDragon[_0x201252(0x202)]['Command\x20Window\x20BG\x20Height']),ShadowDragon['MC'][_0x205b7f(0x416)]=String(ShadowDragon['parameters'][_0x201252(0x19e)]),ShadowDragon['MC'][_0x201252(0x2d7)]=String(ShadowDragon[_0x205b7f(0x1f0)]['GE\x20Command\x20Window\x20BG\x20Height']),ShadowDragon['MC'][_0x55f923(0x3b8,']Hbi')]=String(ShadowDragon['parameters'][_0x205b7f(0x33a)]),ShadowDragon['MC'][_0x205b7f(0x269)]=String(ShadowDragon[_0x55f923(0x403,'hEe$')][_0x201252(0x41c)]),ShadowDragon['MC'][_0x55f923(0x323,'^iMI')]=Number(ShadowDragon[_0x205b7f(0x1f0)][_0x205b7f(0x25a)]),ShadowDragon['MC']['_cmdPosY']=String(ShadowDragon[_0x205b7f(0x1f0)][_0x205b7f(0x2aa)]),ShadowDragon['MC'][_0x55f923(0x33e,'p&fV')]=String(ShadowDragon[_0x55f923(0x1b1,'5OkS')][_0x55f923(0x2ec,'LDW2')]),ShadowDragon['MC'][_0x55f923(0x2b8,'n^#r')]=String(ShadowDragon[_0x201252(0x202)][_0x205b7f(0x26d)]),ShadowDragon['MC'][_0x201252(0x3a2)]=Number(ShadowDragon[_0x201252(0x202)]['GE\x20Spacing\x20Between\x20Buttons']),ShadowDragon['MC'][_0x55f923(0x333,'bQ22')]=String(ShadowDragon[_0x55f923(0x3d8,'j%Hz')][_0x205b7f(0x26f)]),ShadowDragon['MC'][_0x55f923(0x20d,'[&f1')]=['\x5cI[0]',_0x201252(0x300),_0x205b7f(0x404),_0x205b7f(0x1e9)],ShadowDragon['MC'][_0x201252(0x38e)]=[_0x201252(0x3a4),'\x5cI[5]',_0x205b7f(0x27a),_0x205b7f(0x2c5)],ShadowDragon['MC'][_0x205b7f(0x2cb)]=['\x5cI[8]',_0x55f923(0x3cf,'e85J'),_0x205b7f(0x41a),_0x201252(0x328)],ShadowDragon['MC'][_0x205b7f(0x2c1)]=[_0x205b7f(0x201),'\x5cI[13]',_0x55f923(0x1fe,'KcGh'),_0x205b7f(0x1a1)],ShadowDragon['MC'][_0x201252(0x1ad)]=[_0x201252(0x1d6),_0x201252(0x258),'\x5cI[18]','\x5cI[19]'],ShadowDragon['MC']['_cmd6']=['\x5cI[20]',_0x205b7f(0x3f7),_0x55f923(0x419,'K^GX'),_0x201252(0x3b9)],ShadowDragon['MC'][_0x55f923(0x354,'3n4K')]=['\x5cI[24]',_0x201252(0x356),_0x201252(0x3a8),_0x55f923(0x1ab,'p&fV')],ShadowDragon['MC'][_0x205b7f(0x301)]=[_0x205b7f(0x2d8),'\x5cI[29]','\x5cI[30]',_0x55f923(0x2c8,'j%Hz')],ShadowDragon['MC']['_cmd9']=['\x5cI[32]',_0x205b7f(0x1f2),_0x55f923(0x3c4,'dtM5'),_0x201252(0x2ee)],ShadowDragon['MC']['_cmd10']=['\x5cI[36]',_0x205b7f(0x20c),'\x5cI[38]',_0x205b7f(0x343)],ShadowDragon['MC'][_0x201252(0x3e3)]=[],ShadowDragon['MC'][_0x205b7f(0x410)]=String(ShadowDragon[_0x205b7f(0x1f0)][_0x201252(0x21f)]),ShadowDragon['MC'][_0x205b7f(0x3a5)]=Number(ShadowDragon['parameters'][_0x205b7f(0x3d1)]),ShadowDragon['MC']['_cmdSc2']=String(ShadowDragon[_0x205b7f(0x1f0)][_0x55f923(0x3f6,'9I]k')]),ShadowDragon['MC'][_0x201252(0x395)]=Number(ShadowDragon['parameters'][_0x205b7f(0x25d)]),ShadowDragon['MC'][_0x205b7f(0x2ba)]=String(ShadowDragon[_0x205b7f(0x1f0)][_0x55f923(0x217,'UEWl')]),ShadowDragon['MC'][_0x205b7f(0x38b)]=Number(ShadowDragon['parameters'][_0x55f923(0x22c,'xRA!')]),ShadowDragon['MC'][_0x55f923(0x1ea,'l2&T')]=String(ShadowDragon[_0x201252(0x202)][_0x55f923(0x376,'&GT5')]),ShadowDragon['MC']['_cmdSw4']=Number(ShadowDragon[_0x55f923(0x309,'1v*j')][_0x201252(0x330)]),ShadowDragon['MC'][_0x55f923(0x351,']Hbi')]=String(ShadowDragon['parameters'][_0x205b7f(0x329)]),ShadowDragon['MC'][_0x55f923(0x42b,'w1Vk')]=Number(ShadowDragon['parameters'][_0x205b7f(0x371)]),ShadowDragon['MC'][_0x55f923(0x1fc,'Ju#F')]=String(ShadowDragon['parameters'][_0x205b7f(0x3a9)]),ShadowDragon['MC'][_0x205b7f(0x34d)]=Number(ShadowDragon['parameters'][_0x205b7f(0x2f8)]),ShadowDragon['MC'][_0x205b7f(0x23b)]=String(ShadowDragon[_0x205b7f(0x1f0)][_0x205b7f(0x203)]),ShadowDragon['MC'][_0x205b7f(0x3c3)]=Number(ShadowDragon[_0x201252(0x202)][_0x55f923(0x199,'UEWl')]),ShadowDragon['MC'][_0x205b7f(0x3d9)]=String(ShadowDragon[_0x55f923(0x3de,'kJ3G')][_0x201252(0x3b1)]),ShadowDragon['MC'][_0x205b7f(0x252)]=Number(ShadowDragon[_0x205b7f(0x1f0)][_0x55f923(0x1b4,'%!P2')]),ShadowDragon['MC'][_0x55f923(0x305,'bQ22')]=String(ShadowDragon['parameters'][_0x205b7f(0x183)]),ShadowDragon['MC'][_0x55f923(0x274,'w1Vk')]=Number(ShadowDragon[_0x55f923(0x319,'p&fV')][_0x205b7f(0x358)]),ShadowDragon['MC'][_0x55f923(0x382,'hEe$')]=String(ShadowDragon[_0x201252(0x202)][_0x55f923(0x1c8,'LuUC')]),ShadowDragon['MC'][_0x205b7f(0x2fa)]=Number(ShadowDragon[_0x201252(0x202)][_0x201252(0x1d0)]),ShadowDragon['MC']['_GEcmd1']=['\x5cI[0]','\x5cI[1]'],ShadowDragon['MC'][_0x55f923(0x240,'91AZ')]=[_0x205b7f(0x404),_0x55f923(0x293,']Hbi')],ShadowDragon['MC']['_GEcmd3']=[_0x205b7f(0x1d7),'\x5cI[5]'],ShadowDragon['MC'][_0x201252(0x185)]=[ShadowDragon['MC'][_0x205b7f(0x3b0)],ShadowDragon['MC'][_0x205b7f(0x2dc)],ShadowDragon['MC'][_0x201252(0x264)]],ShadowDragon['MC'][_0x205b7f(0x1c1)]=String(ShadowDragon[_0x201252(0x202)][_0x205b7f(0x1c2)]),ShadowDragon['MC'][_0x55f923(0x19f,'KcGh')]=String(ShadowDragon['parameters'][_0x205b7f(0x2bc)]),ShadowDragon['MC']['_ILW']=String(ShadowDragon[_0x201252(0x202)][_0x205b7f(0x1f9)]),ShadowDragon['MC'][_0x201252(0x3ee)]=String(ShadowDragon[_0x201252(0x202)][_0x55f923(0x2de,']Hbi')]),ShadowDragon['MC'][_0x201252(0x1dc)]=Number(ShadowDragon['parameters']['Max\x20Columns']),ShadowDragon['MC'][_0x55f923(0x352,'%U@$')]=Number(ShadowDragon[_0x201252(0x202)]['Item\x20Rect']),ShadowDragon['MC'][_0x201252(0x31c)]=Number(ShadowDragon[_0x201252(0x202)][_0x55f923(0x298,'5OkS')]),ShadowDragon['MC']['_CRWH']=Number(ShadowDragon[_0x55f923(0x2e5,'Ju#F')][_0x205b7f(0x326)]),ShadowDragon['MC'][_0x55f923(0x2f7,'CfH&')]=Number(ShadowDragon['parameters'][_0x55f923(0x399,'bQ22')]),ShadowDragon['MC']['_INrX']=Number(ShadowDragon[_0x55f923(0x2cf,'r$HW')][_0x205b7f(0x1a4)]),ShadowDragon['MC'][_0x201252(0x340)]=Number(ShadowDragon['parameters'][_0x55f923(0x415,'$4Uv')]),ShadowDragon['MC']['_HWX']=String(ShadowDragon[_0x55f923(0x39e,'TSk8')][_0x201252(0x245)]),ShadowDragon['MC'][_0x55f923(0x2c7,'[J2*')]=String(ShadowDragon['parameters'][_0x205b7f(0x282)]),ShadowDragon['MC'][_0x55f923(0x2b7,'Ha$t')]=Number(ShadowDragon[_0x205b7f(0x1f0)][_0x201252(0x412)]),ShadowDragon['MC'][_0x205b7f(0x3ce)]=String(ShadowDragon['parameters'][_0x205b7f(0x1ac)]),ShadowDragon['MC']['_WIDY']=String(ShadowDragon[_0x205b7f(0x1f0)]['Item\x20Display\x20Window\x20Y']),ShadowDragon['MC']['_WIDW']=String(ShadowDragon[_0x55f923(0x32b,'z#u]')][_0x205b7f(0x241)]),ShadowDragon['MC'][_0x55f923(0x266,'&GT5')]=String(ShadowDragon[_0x205b7f(0x1f0)][_0x201252(0x2a9)]),ShadowDragon['MC'][_0x205b7f(0x3e1)]=String(ShadowDragon[_0x205b7f(0x1f0)][_0x205b7f(0x3f1)]),ShadowDragon['MC'][_0x55f923(0x223,'91AZ')]=String(ShadowDragon[_0x205b7f(0x1f0)][_0x55f923(0x2b0,'^iMI')]),ShadowDragon['MC'][_0x55f923(0x1e7,'K^GX')]=String(ShadowDragon[_0x55f923(0x39c,'l2&T')]['Item\x20Confirm\x20Window\x20X']),ShadowDragon['MC'][_0x55f923(0x3a0,'FO2x')]=String(ShadowDragon[_0x201252(0x202)][_0x201252(0x34c)]),ShadowDragon[_0x55f923(0x2d6,'Ju#F')]=Window[_0x55f923(0x208,'#)bE')]['_updateCursor'],Window[_0x55f923(0x34a,'xFN0')][_0x55f923(0x2b4,'kJ3G')]=function(){const _0x4e9196=_0x55f923,_0x58cd82=_0x201252;this[_0x58cd82(0x1fa)]=0x0,ShadowDragon[_0x4e9196(0x327,'n^#r')]['apply'](this,arguments);},SceneManager[_0x55f923(0x3ed,'K^GX')]=function(){this['_backgroundBitmap']=this['snap']();},Scene_Menu[_0x55f923(0x263,'w1Vk')]['create']=function(){const _0x40b4d1=_0x55f923,_0x57a850=_0x205b7f,_0x1df4cc=_0x201252;Scene_MenuBase[_0x1df4cc(0x3fd)]['create'][_0x57a850(0x21a)](this),this[_0x1df4cc(0x341)](),this['_commandWindow'][_0x40b4d1(0x250,'TSk8')]=0x0;},Scene_Menu[_0x205b7f(0x2be)][_0x201252(0x35f)]=function(){const _0x4b0a12=_0x201252,_0x3e6c5e=_0x205b7f,_0xda0639=_0x55f923;Scene_MenuBase[_0xda0639(0x24e,'dtM5')][_0x3e6c5e(0x1c3)][_0x4b0a12(0x232)](this);},Scene_Menu[_0x201252(0x3fd)][_0x205b7f(0x242)]=function(){const _0x26cca9=_0x55f923,_0x4bde26=_0x201252,_0x57075f=_0x205b7f,_0x23f63c={'qoqEE':function(_0x1a2790,_0x420aa4){return _0x1a2790(_0x420aa4);},'XKTzC':function(_0x2b0596,_0x6ce16c){return _0x2b0596(_0x6ce16c);},'WLhGF':_0x57075f(0x36c),'oLrum':'cmd2','CqALs':_0x4bde26(0x374),'BVoNN':_0x4bde26(0x320),'kNmeS':_0x57075f(0x3bd),'sBeYH':_0x57075f(0x27e),'uMojz':_0x26cca9(0x420,'K^GX'),'qcEvU':'cmd10'};let _0x545ca3=_0x23f63c[_0x57075f(0x1b6)](eval,ShadowDragon['MC'][_0x4bde26(0x337)]),_0x2c4ff6=_0x23f63c[_0x26cca9(0x310,'$4Uv')](eval,ShadowDragon['MC'][_0x26cca9(0x427,'$4Uv')]);this[_0x4bde26(0x2c3)]=new Window_MenuCommand(_0x545ca3,_0x2c4ff6),this[_0x4bde26(0x2c3)]['setHandler'](_0x23f63c[_0x4bde26(0x32f)],this[_0x4bde26(0x1da)][_0x57075f(0x260)](this)),this[_0x26cca9(0x247,'TSk8')][_0x4bde26(0x2da)](_0x23f63c[_0x57075f(0x2cc)],this[_0x4bde26(0x2fb)][_0x26cca9(0x24b,'j%Hz')](this)),this[_0x4bde26(0x2c3)]['setHandler'](_0x23f63c[_0x57075f(0x22a)],this[_0x4bde26(0x227)]['bind'](this)),this[_0x26cca9(0x3ba,'5OkS')][_0x57075f(0x1bb)]('cmd4',this['command4'][_0x57075f(0x260)](this)),this[_0x26cca9(0x2e0,'dtM5')]['setHandler'](_0x23f63c[_0x26cca9(0x3d2,'#)bE')],this['command5']['bind'](this)),this[_0x4bde26(0x2c3)][_0x57075f(0x1bb)](_0x23f63c[_0x26cca9(0x2a0,'jp@@')],this[_0x4bde26(0x2e8)][_0x4bde26(0x2d1)](this)),this['_commandWindow']['setHandler'](_0x57075f(0x37e),this[_0x26cca9(0x414,'3n4K')][_0x4bde26(0x2d1)](this)),this[_0x57075f(0x30b)]['setHandler'](_0x23f63c[_0x4bde26(0x238)],this[_0x26cca9(0x292,'#)bE')][_0x57075f(0x260)](this)),this[_0x57075f(0x30b)][_0x4bde26(0x2da)](_0x23f63c['uMojz'],this[_0x26cca9(0x209,'FO2x')][_0x57075f(0x260)](this)),this[_0x57075f(0x30b)]['setHandler'](_0x23f63c[_0x4bde26(0x1f1)],this[_0x57075f(0x31a)]['bind'](this)),this['addWindow'](this['_commandWindow']);},Scene_Menu['prototype'][_0x201252(0x2f5)]=function(_0x511ec0){const _0x4741e9=_0x205b7f,_0x462f78=_0x201252,_0x4d2824={'sbimV':function(_0x7a0c1e,_0x453372){return _0x7a0c1e(_0x453372);}};try{return _0x4d2824[_0x462f78(0x2f3)](eval,_0x511ec0);}catch(_0x5c8f8f){this[_0x4741e9(0x30b)][_0x462f78(0x3df)]();}},Scene_Menu[_0x55f923(0x2f2,'yFKy')]['command1']=function(){const _0x58857a=_0x205b7f;this[_0x58857a(0x2e6)](ShadowDragon['MC'][_0x58857a(0x410)]);},Scene_Menu[_0x201252(0x3fd)][_0x201252(0x2fb)]=function(){const _0x3255d7=_0x55f923,_0x5d48a4=_0x201252;this[_0x5d48a4(0x2f5)](ShadowDragon['MC'][_0x3255d7(0x2ca,'&GT5')]);},Scene_Menu[_0x201252(0x3fd)][_0x55f923(0x1b0,'LDW2')]=function(){const _0x1adf49=_0x201252,_0x2f66c0=_0x205b7f;this[_0x2f66c0(0x2e6)](ShadowDragon['MC'][_0x1adf49(0x279)]);},Scene_Menu['prototype']['command4']=function(){const _0x4c39a8=_0x55f923,_0x1ea1b9=_0x201252;this[_0x1ea1b9(0x2f5)](ShadowDragon['MC'][_0x4c39a8(0x24a,'xFN0')]);},Scene_Menu[_0x201252(0x3fd)]['command5']=function(){const _0x56d032=_0x205b7f,_0x117eb3=_0x201252;this[_0x117eb3(0x2f5)](ShadowDragon['MC'][_0x56d032(0x235)]);},Scene_Menu['prototype'][_0x201252(0x2e8)]=function(){const _0xffb96e=_0x205b7f,_0x12e127=_0x201252;this[_0x12e127(0x2f5)](ShadowDragon['MC'][_0xffb96e(0x39d)]);},Scene_Menu[_0x205b7f(0x2be)][_0x201252(0x36f)]=function(){const _0x5fe079=_0x205b7f;this[_0x5fe079(0x2e6)](ShadowDragon['MC']['_cmdSc7']);},Scene_Menu[_0x205b7f(0x2be)][_0x55f923(0x31e,'CfH&')]=function(){this['evalCommand'](ShadowDragon['MC']['_cmdSc8']);},Scene_Menu['prototype'][_0x205b7f(0x394)]=function(){const _0x44111d=_0x201252;this[_0x44111d(0x2f5)](ShadowDragon['MC'][_0x44111d(0x261)]);},Scene_Menu[_0x205b7f(0x2be)][_0x205b7f(0x31a)]=function(){const _0x5be6af=_0x55f923;this[_0x5be6af(0x236,']Hbi')](ShadowDragon['MC']['_cmdSc10']);},Window_MenuCommand['prototype']['initialize']=function(_0x385904,_0x2dd731){const _0x4f871c=_0x205b7f,_0x41eb1f=_0x55f923;Window_Command[_0x41eb1f(0x402,'r$HW')][_0x4f871c(0x36d)][_0x41eb1f(0x424,'%AUq')](this,_0x385904,_0x2dd731),this['selectLast'](),this[_0x4f871c(0x2fc)](0x2);},Window_MenuCommand[_0x201252(0x3fd)][_0x205b7f(0x23d)]=function(){const _0x563c43=_0x55f923,_0x5374b2=_0x205b7f,_0x4d0067=_0x201252,_0x5b4cac={'LbKgm':function(_0x4d16e0,_0x434a8a){return _0x4d16e0<_0x434a8a;},'rKuvJ':function(_0x620c1f,_0x25bdba){return _0x620c1f+_0x25bdba;}};this[_0x4d0067(0x221)]();var _0x559f05=this[_0x5374b2(0x33d)]();for(var _0x245cf6=0x0;_0x5b4cac['LbKgm'](_0x245cf6,this[_0x563c43(0x3ad,'%AUq')]());_0x245cf6++){var _0x23e3b7=_0x5b4cac[_0x5374b2(0x284)](_0x559f05,_0x245cf6);_0x5b4cac['LbKgm'](_0x23e3b7,this[_0x4d0067(0x3d7)]())&&this[_0x563c43(0x2e3,'$4Uv')](_0x23e3b7);}},Window_MenuCommand[_0x205b7f(0x2be)][_0x55f923(0x386,'dtM5')]=function(){const _0x377753=_0x201252,_0x5c592a=_0x205b7f,_0x36ab8a={'yxESW':_0x5c592a(0x3b3)};let _0x21b9bd=ImageManager['loadPicture'](_0x36ab8a[_0x5c592a(0x373)]);if(_0x21b9bd){let _0x5acaa2=_0x21b9bd['width'],_0x3d1181=_0x21b9bd['height'],_0x40ed8d=0x0,_0x4e501e=0x0,_0x5dd640=0x0,_0x102000=0x0,_0x362ef7=_0x5acaa2,_0x3411d2=_0x3d1181;this['contents'][_0x377753(0x1bf)](_0x21b9bd,_0x40ed8d,_0x4e501e,_0x5acaa2,_0x3d1181,_0x5dd640,_0x102000,_0x362ef7,_0x3411d2);}},Window_MenuCommand[_0x55f923(0x31b,'ab)t')][_0x201252(0x1f6)]=function(){this['addMainCommands']();},Window_MenuCommand['prototype'][_0x55f923(0x2c2,'xFN0')]=function(){const _0x3e85b2=_0x205b7f,_0x488365=_0x55f923,_0x594f47=_0x201252,_0x360a64={'KvNrs':_0x594f47(0x355),'qAiHA':_0x594f47(0x374),'ESqce':'cmd4','LdNaQ':'cmd6','Gypss':_0x594f47(0x1e2),'QpfLl':_0x594f47(0x296),'CBCaK':_0x488365(0x1f3,'3n4K')};ShadowDragon['MC'][_0x3e85b2(0x410)]&&ShadowDragon['MC']['_cmdSw1']&&(this[_0x594f47(0x3c1)](ShadowDragon['MC']['_cmd1'][0x0],_0x3e85b2(0x36c),$gameSwitches[_0x594f47(0x380)](ShadowDragon['MC']['_cmdSw1'])),ShadowDragon['MC']['commandList'][_0x594f47(0x205)](ShadowDragon['MC'][_0x594f47(0x211)])),ShadowDragon['MC'][_0x3e85b2(0x24c)]&&ShadowDragon['MC']['_cmdSw2']&&(this[_0x594f47(0x3c1)](ShadowDragon['MC'][_0x594f47(0x38e)][0x0],_0x360a64[_0x594f47(0x237)],$gameSwitches[_0x3e85b2(0x187)](ShadowDragon['MC'][_0x488365(0x18d,'1nFh')])),ShadowDragon['MC'][_0x3e85b2(0x2b5)][_0x3e85b2(0x426)](ShadowDragon['MC']['_cmd2'])),ShadowDragon['MC']['_cmdSc3']&&ShadowDragon['MC'][_0x3e85b2(0x38b)]&&(this[_0x3e85b2(0x1d4)](ShadowDragon['MC'][_0x3e85b2(0x2cb)][0x0],_0x360a64[_0x488365(0x193,'w1Vk')],$gameSwitches[_0x488365(0x2a4,'91AZ')](ShadowDragon['MC'][_0x488365(0x303,'UEWl')])),ShadowDragon['MC']['commandList'][_0x3e85b2(0x426)](ShadowDragon['MC'][_0x488365(0x1d1,'xFN0')])),ShadowDragon['MC'][_0x3e85b2(0x1f5)]&&ShadowDragon['MC'][_0x488365(0x19b,'%U@$')]&&(this['addCommand'](ShadowDragon['MC'][_0x594f47(0x40e)][0x0],_0x360a64[_0x594f47(0x318)],$gameSwitches[_0x488365(0x2a5,'IGzQ')](ShadowDragon['MC'][_0x3e85b2(0x384)])),ShadowDragon['MC'][_0x488365(0x230,'e85J')][_0x3e85b2(0x426)](ShadowDragon['MC'][_0x488365(0x25f,'%AUq')])),ShadowDragon['MC'][_0x3e85b2(0x235)]&&ShadowDragon['MC'][_0x594f47(0x3d4)]&&(this[_0x3e85b2(0x1d4)](ShadowDragon['MC'][_0x594f47(0x1ad)][0x0],_0x594f47(0x320),$gameSwitches[_0x594f47(0x380)](ShadowDragon['MC']['_cmdSw5'])),ShadowDragon['MC'][_0x488365(0x311,'LuUC')]['push'](ShadowDragon['MC'][_0x488365(0x18a,'bQ22')])),ShadowDragon['MC'][_0x594f47(0x228)]&&ShadowDragon['MC']['_cmdSw6']&&(this['addCommand'](ShadowDragon['MC'][_0x488365(0x339,'j%Hz')][0x0],_0x360a64[_0x594f47(0x1d2)],$gameSwitches[_0x3e85b2(0x187)](ShadowDragon['MC'][_0x594f47(0x1a0)])),ShadowDragon['MC'][_0x3e85b2(0x2b5)]['push'](ShadowDragon['MC'][_0x3e85b2(0x216)])),ShadowDragon['MC'][_0x3e85b2(0x23b)]&&ShadowDragon['MC'][_0x3e85b2(0x3c3)]&&(this[_0x594f47(0x3c1)](ShadowDragon['MC'][_0x594f47(0x405)][0x0],_0x360a64[_0x3e85b2(0x35d)],$gameSwitches[_0x3e85b2(0x187)](ShadowDragon['MC']['_cmdSw7'])),ShadowDragon['MC'][_0x488365(0x230,'e85J')][_0x594f47(0x205)](ShadowDragon['MC'][_0x488365(0x3db,'CN76')])),ShadowDragon['MC'][_0x488365(0x26b,'[J2*')]&&ShadowDragon['MC'][_0x594f47(0x2f6)]&&(this[_0x488365(0x273,'9I]k')](ShadowDragon['MC']['_cmd8'][0x0],'cmd8',$gameSwitches[_0x594f47(0x380)](ShadowDragon['MC'][_0x488365(0x430,'$4Uv')])),ShadowDragon['MC']['commandList'][_0x594f47(0x205)](ShadowDragon['MC']['_cmd8'])),ShadowDragon['MC'][_0x488365(0x2bd,'eCWV')]&&ShadowDragon['MC'][_0x594f47(0x26a)]&&(this['addCommand'](ShadowDragon['MC'][_0x488365(0x19c,'r$HW')][0x0],_0x360a64[_0x488365(0x31d,'LuUC')],$gameSwitches[_0x3e85b2(0x187)](ShadowDragon['MC']['_cmdSw9'])),ShadowDragon['MC'][_0x3e85b2(0x2b5)][_0x3e85b2(0x426)](ShadowDragon['MC']['_cmd9'])),ShadowDragon['MC']['_cmdSc10']&&ShadowDragon['MC'][_0x3e85b2(0x2fa)]&&(this[_0x488365(0x1bc,'[J2*')](ShadowDragon['MC'][_0x3e85b2(0x3e4)][0x0],_0x360a64[_0x488365(0x2e2,'LDW2')],$gameSwitches[_0x3e85b2(0x187)](ShadowDragon['MC'][_0x594f47(0x196)])),ShadowDragon['MC'][_0x594f47(0x3e3)][_0x594f47(0x205)](ShadowDragon['MC']['_cmd10']));},Window_MenuCommand[_0x201252(0x3fd)]['windowWidth']=function(){const _0x24f2c9=_0x205b7f,_0x14304a=_0x55f923,_0x50e8c3={'qInBu':function(_0x17a01f,_0xbc6be2){return _0x17a01f+_0xbc6be2;},'uamXY':function(_0x135620,_0x16b4a5){return _0x135620(_0x16b4a5);}};return _0x50e8c3[_0x14304a(0x418,'xRA!')](_0x50e8c3[_0x24f2c9(0x1cc)](eval,ShadowDragon['MC']['_cmdWindow_W']),0x28);},Window_MenuCommand[_0x201252(0x3fd)][_0x201252(0x2d3)]=function(){const _0x4f3e0e=_0x55f923,_0x2c2c88=_0x201252,_0x133db2={'XblNn':function(_0x5a1a6b,_0x3b23e4){return _0x5a1a6b+_0x3b23e4;},'JFGue':function(_0x2d6a8a,_0x367194){return _0x2d6a8a(_0x367194);}};return _0x133db2[_0x2c2c88(0x244)](_0x133db2[_0x2c2c88(0x400)](eval,ShadowDragon['MC'][_0x4f3e0e(0x200,'RE4j')]),0x28);},Window_MenuCommand[_0x55f923(0x34a,'xFN0')]['lineHeight']=function(){const _0x182bba=_0x201252,_0x113c97=_0x205b7f,_0x12603e={'BBiwt':function(_0x32c35a,_0x39d00d){return _0x32c35a+_0x39d00d;}};return _0x12603e[_0x113c97(0x3f8)](ShadowDragon['MC'][_0x182bba(0x1c7)],ShadowDragon['MC']['_cmdLineHeight']);},Window_MenuCommand['prototype'][_0x55f923(0x364,'Ju#F')]=function(_0x35792f){const _0x2a895e=_0x201252,_0x1bdb70=_0x55f923,_0x132e7a=_0x205b7f,_0x3b4627={'YUmnz':_0x132e7a(0x41e),'QUrmq':function(_0x1c5cce,_0x1e93da){return _0x1c5cce+_0x1e93da;},'BQrhc':function(_0x5ac324,_0x124685){return _0x5ac324-_0x124685;},'duSVk':function(_0x1d192a,_0x7c1881){return _0x1d192a/_0x7c1881;},'xfPjq':function(_0x5a7cca,_0x489c4b){return _0x5a7cca/_0x489c4b;},'KZVgS':function(_0x1984e3,_0x520afb){return _0x1984e3(_0x520afb);}};var _0x57d6a4=this['itemRectForText'](_0x35792f),_0x3c154a=_0x3b4627[_0x1bdb70(0x249,'%!P2')];this[_0x132e7a(0x3fe)]();let _0x4160d7=ShadowDragon['MC'][_0x2a895e(0x3e3)][_0x35792f][0x0];if(this[_0x1bdb70(0x377,'jp@@')]['y']===_0x57d6a4['y'])!this['isCommandEnabled'](_0x35792f)?_0x4160d7=ShadowDragon['MC']['commandList'][_0x35792f][0x3]:_0x4160d7=ShadowDragon['MC'][_0x1bdb70(0x2dd,'n^#r')][_0x35792f][0x1];else!this[_0x2a895e(0x248)](_0x35792f)&&(_0x4160d7=ShadowDragon['MC'][_0x2a895e(0x3e3)][_0x35792f][0x2]);let _0xb7d6d7=_0x3b4627['QUrmq'](_0x57d6a4['x'],_0x3b4627['BQrhc'](_0x3b4627[_0x132e7a(0x290)](_0x57d6a4[_0x2a895e(0x285)],0x2),_0x3b4627[_0x132e7a(0x35a)](ShadowDragon['MC'][_0x1bdb70(0x3ca,'dtM5')],0x2))),_0x2b706a=_0x3b4627[_0x2a895e(0x21d)](_0x57d6a4['y'],_0x3b4627[_0x1bdb70(0x313,'CfH&')](eval,ShadowDragon['MC']['_cmdPosY']));this[_0x1bdb70(0x214,']Hbi')](_0x4160d7,_0xb7d6d7,_0x2b706a,_0x57d6a4[_0x1bdb70(0x368,'%!P2')],_0x3c154a);},Window_MenuCommand['prototype']['_updateCursor']=function(){const _0x4a53aa=_0x55f923,_0x3c6713=_0x205b7f,_0x2d5cdb=_0x201252;Window[_0x2d5cdb(0x3fd)][_0x3c6713(0x182)][_0x2d5cdb(0x232)](this),this[_0x3c6713(0x361)][_0x4a53aa(0x1ee,'p&fV')]=![],this['refresh']();},Window_MenuCommand[_0x55f923(0x36a,'%AUq')]['isCancelEnabled']=function(){return!![];},Window_MenuCommand['prototype'][_0x201252(0x18c)]=function(){const _0x1c6b3=_0x205b7f;SoundManager['playCancel'](),this['updateInputData'](),this[_0x1c6b3(0x353)](),SceneManager['pop']();},Window_MenuCommand['prototype'][_0x55f923(0x220,'n^#r')]=function(_0x32c498,_0x66ecf9){const _0x48f09e=_0x201252,_0x4a6562=_0x55f923,_0xda148=_0x205b7f;switch(_0x32c498){case'C':Imported[_0xda148(0x1ca)]?this['contents'][_0x4a6562(0x1ff,'[&f1')](_0x66ecf9):this[_0xda148(0x3e5)](this['textColor'](this[_0x48f09e(0x28a)](_0x66ecf9)));break;case'I':this[_0xda148(0x321)](this['obtainEscapeParam'](_0x66ecf9),_0x66ecf9);break;case'{':this[_0x48f09e(0x2cd)]();break;case'}':this[_0x4a6562(0x3e8,'FO2x')]();break;}},Window_MenuCommand[_0x205b7f(0x2be)][_0x201252(0x2e4)]=function(_0x1fe57f,_0x689923){const _0x5342d7=_0x201252,_0x477f14=_0x55f923,_0x21fc6b=_0x205b7f,_0x270ecb={'ufCHz':_0x21fc6b(0x254),'ssOUn':function(_0x4123a2,_0xc9f603){return _0x4123a2+_0xc9f603;}};let _0x2ec877=ImageManager[_0x477f14(0x194,'%U@$')](_0x270ecb[_0x477f14(0x1ba,'5OkS')]),_0x11daf2=ShadowDragon['MC'][_0x5342d7(0x41b)],_0x315a66=ShadowDragon['MC'][_0x5342d7(0x1c7)],_0x17bc16=0x4;this[_0x21fc6b(0x32c)](_0x1fe57f,_0x270ecb[_0x5342d7(0x2df)](_0x689923['x'],0x2),_0x689923['y']+0x2,_0x11daf2,_0x315a66,_0x17bc16,_0x2ec877),_0x689923['x']+=_0x11daf2+0x4;},Window_MenuCommand[_0x55f923(0x357,'IGzQ')][_0x205b7f(0x32c)]=function(_0x1aac58,_0x13f978,_0x43bce1,_0x16b579,_0x4e47e6,_0x585c42,_0x5b1c09){const _0x49f8bb=_0x55f923,_0xd27630=_0x205b7f,_0x4cf48a=_0x201252,_0x15b921={'tQZrC':function(_0x4f1ac4,_0x215df5){return _0x4f1ac4*_0x215df5;},'hLYPv':function(_0x4ceb5e,_0x3117fb){return _0x4ceb5e%_0x3117fb;},'ArhuF':function(_0x3de37f,_0x321aee){return _0x3de37f/_0x321aee;}};let _0x2f0a72=_0x5b1c09,_0xaa3ef1=_0x16b579,_0x3b6c0d=_0x4e47e6,_0x188a1a=_0xaa3ef1,_0x4eae91=_0x3b6c0d,_0x5a9fb8=_0x15b921[_0x4cf48a(0x312)](_0x15b921[_0x4cf48a(0x1d5)](_0x1aac58,_0x585c42),_0xaa3ef1),_0x27b3ec=_0x15b921['tQZrC'](Math[_0xd27630(0x3b5)](_0x15b921[_0xd27630(0x345)](_0x1aac58,_0x585c42)),_0x3b6c0d);this[_0x4cf48a(0x222)][_0x49f8bb(0x226,'j%Hz')](_0x2f0a72,_0x5a9fb8,_0x27b3ec,_0xaa3ef1,_0x3b6c0d,_0x13f978,_0x43bce1,_0x188a1a,_0x4eae91);},Scene_Item['prototype'][_0x201252(0x24d)]=function(){const _0x2dafe4=_0x201252,_0x5c6d04=_0x205b7f,_0xb2ab2f=_0x55f923,_0x2d8085={'jCKhc':_0xb2ab2f(0x25c,'w1Vk')},_0x45c3ac=_0x2d8085['jCKhc'][_0x5c6d04(0x40a)]('|');let _0xabe64b=0x0;while(!![]){switch(_0x45c3ac[_0xabe64b++]){case'0':this[_0x5c6d04(0x37d)]();continue;case'1':this[_0xb2ab2f(0x3fc,'KcGh')]();continue;case'2':Scene_ItemBase['prototype']['create'][_0x5c6d04(0x21a)](this);continue;case'3':this['_helpWindow']['opacity']=0x0;continue;case'4':this[_0xb2ab2f(0x3ec,'yFKy')]();continue;case'5':this[_0xb2ab2f(0x316,'%U@$')]();continue;case'6':this[_0x2dafe4(0x3c8)]();continue;case'7':this[_0xb2ab2f(0x2f4,'%AUq')]();continue;case'8':this[_0x5c6d04(0x2fd)][_0x2dafe4(0x20f)]=0x0;continue;case'9':this['_itemWindow'][_0x5c6d04(0x306)]=0x0;continue;case'10':this[_0x5c6d04(0x267)]['opacity']=0x0;continue;}break;}},Scene_ItemBase[_0x55f923(0x3f4,'K^GX')][_0x55f923(0x381,'Ha$t')]=function(){const _0x50bf1a=_0x55f923,_0x2aad3e=_0x201252,_0x39b966=_0x205b7f;let _0x554616=new Game_Action(this[_0x39b966(0x325)]());_0x554616['setItemObject'](this['item']());if(!_0x554616[_0x2aad3e(0x27c)]())return[];else return _0x554616['isForAll']()?$gameParty[_0x39b966(0x26e)]():[$gameParty[_0x50bf1a(0x37c,'%AUq')]()[0x0]];},Scene_ItemBase[_0x201252(0x3fd)]['determineItem']=function(){const _0x583acd=_0x201252,_0x7461db=_0x205b7f,_0x5805c9=_0x55f923;let _0x4d122d=new Game_Action(this[_0x5805c9(0x30d,'3n4K')]()),_0x14d567=this['item']();_0x4d122d[_0x7461db(0x28f)](_0x14d567),_0x4d122d[_0x7461db(0x3e2)]()?this[_0x583acd(0x2ac)]():this[_0x5805c9(0x239,'l2&T')](),this[_0x7461db(0x219)]();},ShadowDragon[_0x55f923(0x1a5,'[&f1')]=Scene_Item[_0x201252(0x3fd)][_0x55f923(0x184,'Ju#F')],Scene_Item[_0x55f923(0x27d,'91AZ')][_0x55f923(0x3fb,'kJ3G')]=function(){const _0x409c7a=_0x205b7f,_0x1e073b=_0x201252,_0x1f12f2=_0x55f923,_0x513213={'WySBt':_0x1f12f2(0x1e3,'5OkS')};ShadowDragon['MC_SIcB'][_0x1e073b(0x232)](this),this[_0x409c7a(0x370)]=new Sprite(),this[_0x1e073b(0x23f)]['bitmap']=ImageManager[_0x409c7a(0x2a6)](_0x513213[_0x409c7a(0x334)]),this[_0x1e073b(0x1e4)](this['_backgroundSprite']);return;},Scene_Item[_0x201252(0x3fd)][_0x201252(0x3b2)]=function(){const _0x9ceb08=_0x55f923,_0x17250a=_0x205b7f,_0x495c4f=_0x201252,_0x9da74c={'XVliC':function(_0x5c66d7,_0x423d71){return _0x5c66d7(_0x423d71);},'HnGjA':function(_0x238a16,_0x3dabbd){return _0x238a16(_0x3dabbd);},'pJmIY':_0x495c4f(0x2bb),'ickEL':_0x17250a(0x192)};let _0x572281=eval(ShadowDragon['MC']['_ILX']),_0x10d453=_0x9da74c[_0x9ceb08(0x3d3,'p&fV')](eval,ShadowDragon['MC'][_0x9ceb08(0x256,'j%Hz')]),_0x159c50=_0x9da74c['HnGjA'](eval,ShadowDragon['MC'][_0x495c4f(0x1a8)]),_0x551f19=_0x9da74c['HnGjA'](eval,ShadowDragon['MC'][_0x17250a(0x41f)]);this[_0x9ceb08(0x299,'Ha$t')]=new Window_ItemList(_0x572281,_0x10d453,_0x159c50,_0x551f19),this[_0x17250a(0x22e)][_0x17250a(0x28c)](this[_0x17250a(0x359)]),this['_itemWindow'][_0x17250a(0x1bb)]('ok',this[_0x17250a(0x1c5)]['bind'](this)),this['_itemWindow'][_0x17250a(0x1bb)](_0x9da74c[_0x495c4f(0x25b)],this['popScene'][_0x9ceb08(0x1e1,'K^GX')](this)),this[_0x17250a(0x3be)](this[_0x495c4f(0x314)]),this[_0x9ceb08(0x389,'l2&T')][_0x17250a(0x188)](_0x9da74c['ickEL']),this[_0x495c4f(0x2ff)]();},Scene_Item['prototype']['createItemDisplayWindow']=function(){const _0x40a22d=_0x201252,_0xb159c8=_0x55f923;this[_0xb159c8(0x3cc,'RE4j')]=new Window_ItemDisplay(this[_0x40a22d(0x3ab)]()),this[_0xb159c8(0x37b,'1v*j')](this[_0xb159c8(0x206,'$4Uv')]),this[_0xb159c8(0x25e,'5OkS')]['_itemDisplay']=this[_0x40a22d(0x1eb)];},Scene_Item[_0x205b7f(0x2be)][_0x55f923(0x197,'e85J')]=function(){const _0x2ac85c=_0x55f923,_0x1e258b=_0x205b7f,_0x295b47=_0x201252,_0xfa794={'dtiUH':_0x295b47(0x1ed),'OmNAU':_0x295b47(0x2bb)};this['_confirmWindow']=new Window_ItemConfirm(0x0,0x0,0x64),this[_0x1e258b(0x413)][_0x295b47(0x2da)](_0xfa794[_0x295b47(0x42e)],this[_0x2ac85c(0x1cb,'l2&T')][_0x2ac85c(0x3c5,'yFKy')](this)),this['_confirmWindow'][_0x2ac85c(0x295,'UEWl')](_0xfa794[_0x1e258b(0x407)],this[_0x295b47(0x259)][_0x2ac85c(0x393,'dtM5')](this)),this[_0x2ac85c(0x2ed,'hEe$')](this[_0x1e258b(0x413)]);},Scene_Item[_0x201252(0x3fd)][_0x55f923(0x297,'FO2x')]=function(){const _0x20e5c3=_0x55f923,_0x600aae=_0x205b7f,_0x88b965=_0x201252;this[_0x88b965(0x33c)][_0x600aae(0x29d)](),this[_0x20e5c3(0x27b,'e85J')]();},Scene_Item[_0x205b7f(0x2be)]['onCancelAction']=function(){const _0x4fb221=_0x201252,_0x537615=_0x205b7f;this[_0x537615(0x413)]['close'](),this[_0x4fb221(0x314)]['activate']();},Scene_Item[_0x201252(0x3fd)]['onItemSelect']=function(){const _0x402b7c=_0x205b7f,_0x1622a1=_0x201252,_0x568f71=_0x55f923;this[_0x568f71(0x360,'[&f1')](),this[_0x1622a1(0x33c)]['open'](),this[_0x1622a1(0x33c)][_0x402b7c(0x23c)](0x0),this[_0x568f71(0x2a2,'$4Uv')][_0x1622a1(0x3df)]();},Scene_Item['prototype'][_0x201252(0x23a)]=function(){const _0x17a59d=_0x55f923,_0x45141e=_0x205b7f,_0x234541=_0x201252,_0x557a1f={'fqsks':function(_0x1976ba,_0x3bfae3){return _0x1976ba-_0x3bfae3;},'pGwfF':function(_0xff31c0,_0x27289e){return _0xff31c0/_0x27289e;},'VbjZL':function(_0x2d36a3,_0x2acefe){return _0x2d36a3-_0x2acefe;},'fgVWG':function(_0x3121c0,_0xd2d960){return _0x3121c0+_0xd2d960;}};let _0x4697f2=this[_0x234541(0x314)],_0xffca94=_0x4697f2[_0x45141e(0x3c7)](),_0x41e456=_0x4697f2['itemRect'](_0x4697f2[_0x17a59d(0x397,'K^GX')]()),_0x264cf6=_0x557a1f['fqsks'](_0x4697f2['x']+_0x41e456['x'],_0x557a1f[_0x234541(0x255)](_0x41e456[_0x17a59d(0x411,'LDW2')],0x2)),_0x44beca=_0x557a1f['VbjZL'](_0x557a1f[_0x45141e(0x2c6)](_0x4697f2['y'],_0x41e456['y']),_0x41e456[_0x17a59d(0x3dd,'&GT5')]/0x2);this['_confirmWindow'][_0x17a59d(0x1f7,'Ha$t')](_0xffca94[_0x45141e(0x37f)]),this[_0x45141e(0x413)][_0x234541(0x287)](_0x264cf6,_0x44beca);},Window_ItemList[_0x201252(0x3fd)]['maxCols']=function(){const _0x1568e3=_0x201252;return ShadowDragon['MC'][_0x1568e3(0x1dc)];},Window_ItemList[_0x201252(0x3fd)][_0x55f923(0x409,'w1Vk')]=function(){return ShadowDragon['MC']['_IRWH'];},Window_ItemList[_0x201252(0x3fd)][_0x205b7f(0x3bc)]=function(){return ShadowDragon['MC']['_IRWH'];},Window_ItemList[_0x55f923(0x30e,'5OkS')][_0x205b7f(0x262)]=function(_0x2af424){const _0x5c1396=_0x201252,_0x708ceb=_0x205b7f,_0x393fb5=_0x55f923,_0x25b2c1={'eAYMQ':function(_0x44bf78,_0x3e0edb){return _0x44bf78-_0x3e0edb;},'yvusK':function(_0xc80175,_0x24d3b8){return _0xc80175*_0x24d3b8;},'FyDFZ':function(_0x37368b,_0x515cae){return _0x37368b%_0x515cae;},'vSDHv':function(_0x2db6a8,_0x3c5eef){return _0x2db6a8*_0x3c5eef;},'dsYeT':function(_0xc6ff89,_0x5d3fdf){return _0xc6ff89/_0x5d3fdf;}};let _0x555cc4=new Rectangle(),_0x2a9179=this['maxCols']();return _0x555cc4[_0x393fb5(0x342,'91AZ')]=this['itemWidth'](),_0x555cc4[_0x393fb5(0x349,'w1Vk')]=this[_0x708ceb(0x3bc)](),_0x555cc4['x']=_0x25b2c1['eAYMQ'](_0x25b2c1[_0x708ceb(0x428)](_0x25b2c1[_0x393fb5(0x280,'FO2x')](_0x2af424,_0x2a9179),_0x555cc4['width']),this[_0x5c1396(0x224)]),_0x555cc4['y']=_0x25b2c1[_0x5c1396(0x34b)](_0x25b2c1[_0x393fb5(0x3eb,'dtM5')](Math['floor'](_0x25b2c1[_0x393fb5(0x338,'j%Hz')](_0x2af424,_0x2a9179)),_0x555cc4[_0x5c1396(0x1c6)]),this[_0x708ceb(0x36b)]),_0x555cc4;},Window_ItemList['prototype']['updateCursor']=function(){const _0x413199=_0x55f923,_0x5f0688=_0x201252,_0x15e9cc=_0x205b7f,_0x6d0e37={'eVyiL':function(_0x264df1,_0x1fbfab){return _0x264df1*_0x1fbfab;},'DcaZV':function(_0x1d945c,_0x965f69){return _0x1d945c+_0x965f69;},'ZamQG':function(_0x2a203f,_0x4d2900){return _0x2a203f+_0x4d2900;}};if(this[_0x15e9cc(0x32a)]){let _0x24a601=_0x6d0e37[_0x15e9cc(0x32e)](this[_0x5f0688(0x324)](),this[_0x5f0688(0x35c)]());this[_0x413199(0x204,'n^#r')](0x0,0x0,this['contents'][_0x15e9cc(0x281)],_0x24a601),this[_0x413199(0x2c9,'[&f1')](0x0);}else{if(this['isCursorVisible']()){let _0x2dc903=this[_0x15e9cc(0x262)](this[_0x413199(0x332,'&GT5')]());this[_0x413199(0x2e9,'9I]k')](_0x6d0e37[_0x5f0688(0x3af)](_0x2dc903['x'],ShadowDragon['MC'][_0x15e9cc(0x308)]),_0x6d0e37[_0x413199(0x2eb,'%!P2')](_0x2dc903['y'],ShadowDragon['MC'][_0x413199(0x1b8,'[J2*')]),_0x2dc903[_0x413199(0x18e,'bQ22')]-ShadowDragon['MC']['_CRWH'],_0x2dc903[_0x15e9cc(0x406)]-ShadowDragon['MC'][_0x413199(0x429,'CfH&')]);}else this[_0x15e9cc(0x30a)](0x0,0x0,0x0,0x0);}},Window_ItemList['prototype'][_0x201252(0x21b)]=function(_0x4e7cf4,_0xaaaada,_0x1b2659){const _0x26149a=_0x55f923,_0xaae1=_0x205b7f,_0x11d060=_0x201252,_0x413450={'WZVoM':function(_0x425e1c,_0x2b5414){return _0x425e1c+_0x2b5414;}};this[_0x11d060(0x1c4)](),this[_0xaae1(0x32c)](_0x4e7cf4[_0xaae1(0x335)],_0x413450[_0xaae1(0x35b)](_0xaaaada,ShadowDragon['MC'][_0x26149a(0x3a3,'w1Vk')]),_0x413450[_0xaae1(0x35b)](_0x1b2659,ShadowDragon['MC'][_0x26149a(0x2f7,'CfH&')]));},Window_ItemList[_0x55f923(0x24e,'dtM5')][_0x55f923(0x379,'dtM5')]=function(_0x21fa67,_0x29ff28,_0x3e02ef,_0x4bc32a){const _0x4704fb=_0x55f923,_0x1c3bb6=_0x205b7f,_0x43c5a4=_0x201252,_0x41a7b0={'UjVtq':function(_0x1361d9,_0x29f55a){return _0x1361d9-_0x29f55a;},'qIjct':function(_0x4d0b5c,_0x245130){return _0x4d0b5c-_0x245130;},'ALjiO':function(_0x5266a5,_0x5a52d1){return _0x5266a5-_0x5a52d1;},'cipLV':_0x43c5a4(0x32d)};if(this[_0x1c3bb6(0x229)]()){let _0x4485d5=$gameParty[_0x4704fb(0x1bd,'[J2*')](_0x21fa67);this[_0x4704fb(0x398,'UEWl')]('x',_0x41a7b0[_0x1c3bb6(0x1cd)](_0x29ff28,ShadowDragon['MC'][_0x1c3bb6(0x1e5)]),_0x3e02ef+ShadowDragon['MC'][_0x4704fb(0x268,'LuUC')],_0x4bc32a,_0x43c5a4(0x32d)),this[_0x1c3bb6(0x322)](_0x4485d5,_0x41a7b0['qIjct'](_0x29ff28+0x10,ShadowDragon['MC']['_INrX']),_0x3e02ef+ShadowDragon['MC'][_0x43c5a4(0x340)],_0x41a7b0[_0x4704fb(0x246,'j%Hz')](_0x4bc32a,this[_0x43c5a4(0x2b9)]('00')),_0x41a7b0['cipLV']);}},ShadowDragon[_0x201252(0x288)]=Window_ItemList['prototype'][_0x205b7f(0x23c)],Window_ItemList[_0x205b7f(0x2be)][_0x55f923(0x3bf,'ab)t')]=function(){const _0x46ff53=_0x201252,_0x2998c2=_0x205b7f;ShadowDragon['MC_WIL_s'][_0x2998c2(0x2bf)](this,arguments),this[_0x46ff53(0x1ec)](this[_0x46ff53(0x3ab)]());},Window_ItemList[_0x201252(0x3fd)][_0x201252(0x1ec)]=function(_0x5a050d){const _0x5f02b5=_0x55f923,_0x4e30a6=_0x205b7f;if(this[_0x4e30a6(0x267)])this['_itemDisplay'][_0x5f02b5(0x362,'Ju#F')](_0x5a050d);},Window_Help[_0x201252(0x3fd)][_0x205b7f(0x36d)]=function(_0x44e8f8){const _0x3b088a=_0x55f923,_0x3e93c2=_0x201252,_0x1c6f86=_0x205b7f,_0x20246a={'slXOo':function(_0x4da6cd,_0x1866a5){return _0x4da6cd(_0x1866a5);},'ePatp':function(_0x452c4e,_0x1ab6ed){return _0x452c4e||_0x1ab6ed;}};let _0x1dfe7f=_0x20246a[_0x1c6f86(0x2f9)](eval,ShadowDragon['MC'][_0x3e93c2(0x1b7)]);;let _0xefebee=eval(ShadowDragon['MC']['_HWY']),_0x3aafe2=ShadowDragon['MC'][_0x3b088a(0x33b,'5OkS')],_0x28b1ab=this[_0x3b088a(0x31f,'%!P2')](_0x20246a[_0x3b088a(0x271,'hEe$')](_0x44e8f8,0x2));Window_Base[_0x3e93c2(0x3fd)]['initialize'][_0x3b088a(0x189,'K^GX')](this,_0x1dfe7f,_0xefebee,_0x3aafe2,_0x28b1ab),this[_0x3b088a(0x2ae,'9I]k')]='';},Scene_Battle[_0x201252(0x3fd)][_0x201252(0x39f)]=function(){const _0x4ffd8d=_0x205b7f,_0xf7a0dc=_0x201252,_0x3290f9=_0x55f923;let _0x40441d=BattleManager['inputtingAction']();this['_skillWindow'][_0x3290f9(0x27f,'w1Vk')](),this['_itemWindow'][_0x3290f9(0x33f,'ab)t')]();if(!_0x40441d[_0xf7a0dc(0x270)]())this[_0x3290f9(0x2f0,'p&fV')]();else{if(_0x40441d[_0xf7a0dc(0x1e6)]())this[_0x3290f9(0x1b5,']Hbi')]();else{let _0x406d21=BattleManager[_0x4ffd8d(0x367)]();_0x406d21[_0x3290f9(0x391,'yFKy')](0x0),this[_0xf7a0dc(0x1c0)]();}}},ShadowDragon[_0x205b7f(0x3ef)]=Game_System[_0x201252(0x3fd)][_0x205b7f(0x36d)],Game_System[_0x55f923(0x30e,'5OkS')][_0x205b7f(0x36d)]=function(){const _0x9b7791=_0x55f923,_0x55162b=_0x205b7f;ShadowDragon[_0x55162b(0x3ef)][_0x9b7791(0x40d,'UEWl')](this),this['_itemDpPictures']=[];};function Window_ItemDisplay(){this['initialize']['apply'](this,arguments);};Window_ItemDisplay[_0x205b7f(0x2be)]=Object[_0x205b7f(0x291)](Window_Base[_0x55f923(0x30e,'5OkS')]),Window_ItemDisplay[_0x55f923(0x39a,'z#u]')]['constructor']=Window_ItemDisplay,Window_ItemDisplay['prototype'][_0x55f923(0x1d9,'1v*j')]=function(_0x549092){const _0x4f89af=_0x201252,_0x18aa60=_0x55f923,_0x63cae0=_0x205b7f,_0x433dcb={'mMMtR':function(_0x47cb35,_0x4053f4){return _0x47cb35(_0x4053f4);},'zrhXu':function(_0x2bf8fa,_0xf845ee){return _0x2bf8fa(_0xf845ee);},'XigYO':function(_0x16f21d,_0x3c347b){return _0x16f21d(_0x3c347b);},'nbIdU':function(_0x3082ad,_0x2cfff8){return _0x3082ad(_0x2cfff8);}};Window_Base[_0x63cae0(0x2be)]['initialize']['call'](this);let _0x4cb156=_0x433dcb[_0x18aa60(0x369,'^iMI')](eval,ShadowDragon['MC']['_WIDX']),_0x55f65f=_0x433dcb[_0x63cae0(0x234)](eval,ShadowDragon['MC']['_WIDY']),_0x3dcc07=_0x433dcb[_0x18aa60(0x294,'LuUC')](eval,ShadowDragon['MC'][_0x18aa60(0x372,'ab)t')]),_0x332352=_0x433dcb['nbIdU'](eval,ShadowDragon['MC'][_0x63cae0(0x207)]);this[_0x18aa60(0x30c,'j%Hz')](_0x4cb156,_0x55f65f,_0x3dcc07,_0x332352),this[_0x4f89af(0x2e1)](_0x549092);},Window_ItemDisplay[_0x205b7f(0x2be)][_0x55f923(0x350,'1v*j')]=function(_0x5e9082){const _0x49071c=_0x55f923,_0x32efb0=_0x201252;this[_0x32efb0(0x422)]=new Sprite(),this[_0x49071c(0x388,'xRA!')](this[_0x49071c(0x283,'0XcK')]),this['updateItemDisplaySprite'](this['itemNoteTag'](_0x5e9082));},Window_ItemDisplay[_0x201252(0x3fd)][_0x55f923(0x20e,'3n4K')]=function(){const _0x18c2c9=_0x201252;this[_0x18c2c9(0x26c)](this['_itemDpName']);},Window_ItemDisplay[_0x55f923(0x257,'l2&T')][_0x55f923(0x3d6,'bQ22')]=function(_0x2d32e7,_0x4f03b3,_0x2753c3,_0x113868){const _0x311647=_0x55f923,_0x3a416b=_0x201252;this['x']=_0x2d32e7,this['y']=_0x4f03b3,this[_0x3a416b(0x285)]=_0x2753c3,this[_0x311647(0x2a8,'j%Hz')]=_0x113868;},Window_ItemDisplay[_0x205b7f(0x2be)][_0x55f923(0x215,'CfH&')]=function(_0xa132f0){const _0x1c0495=_0x205b7f,_0x204e9a=_0x201252,_0x417318=_0x55f923,_0x9f024e={'GAgIc':function(_0x5dca21,_0x48af8a){return _0x5dca21(_0x48af8a);}};this[_0x417318(0x28d,'^iMI')]['bitmap']=ImageManager[_0x204e9a(0x39b)](_0xa132f0),this[_0x204e9a(0x422)]['x']=_0x9f024e[_0x204e9a(0x233)](eval,ShadowDragon['MC']['_WIDPX']),this['_itemDpSprite']['y']=_0x9f024e[_0x417318(0x425,'[J2*')](eval,ShadowDragon['MC'][_0x1c0495(0x3e9)]);},Window_ItemDisplay[_0x201252(0x3fd)][_0x55f923(0x191,'FO2x')]=function(_0x571b8f){const _0xdd03d6=_0x55f923,_0x2710ce=_0x201252,_0x44fe93=_0x205b7f,_0x12e781={'ZYItt':function(_0x39f096,_0x2b982c){return _0x39f096!==_0x2b982c;}};if(_0x571b8f){let _0x5e4257=$gameSystem[_0x44fe93(0x3f3)][_0x571b8f['id']];if(_0x5e4257)return _0x5e4257;let _0x2b0d40=_0x571b8f['meta'][_0x2710ce(0x19d)];if(_0x2b0d40&&_0x12e781[_0xdd03d6(0x28b,'Ha$t')](_0x2b0d40,!![]))return _0x2b0d40[_0xdd03d6(0x304,'w1Vk')]();}return'';},Window_ItemDisplay[_0x205b7f(0x2be)][_0x201252(0x1be)]=function(_0x44669e){const _0x45eadb=_0x205b7f;this[_0x45eadb(0x363)]=this['itemNoteTag'](_0x44669e),this[_0x45eadb(0x29c)]();};function Window_ItemConfirm(){this['initialize']['apply'](this,arguments);};Window_ItemConfirm[_0x55f923(0x2e7,'RE4j')]=Object[_0x55f923(0x347,'z#u]')](Window_Command['prototype']),Window_ItemConfirm[_0x55f923(0x257,'l2&T')][_0x205b7f(0x302)]=Window_ItemConfirm,Window_ItemConfirm[_0x55f923(0x1af,'Ju#F')]['initialize']=function(){const _0x17f6f6=_0x55f923,_0x7a1118=_0x205b7f,_0x5d5677=_0x201252;Window_Command[_0x5d5677(0x3fd)][_0x7a1118(0x36d)][_0x17f6f6(0x366,'&GT5')](this,0x0,0x0),this[_0x17f6f6(0x1de,'FO2x')]=null,this[_0x7a1118(0x29b)]=0x0,this[_0x5d5677(0x34e)]='';},Window_ItemConfirm[_0x55f923(0x24e,'dtM5')][_0x55f923(0x225,'kJ3G')]=function(){const _0x2beeb1=_0x55f923;return this[_0x2beeb1(0x2a1,'dtM5')](0x2);},Window_ItemConfirm[_0x55f923(0x357,'IGzQ')][_0x205b7f(0x1b3)]=function(){return 0x2;},Window_ItemConfirm[_0x55f923(0x3f9,'hEe$')]['maxCols']=function(){return 0x1;},Window_ItemConfirm[_0x201252(0x3fd)]['updatePlacement']=function(_0x283c13,_0x2f1698){const _0x107d54=_0x205b7f,_0x405f74=_0x201252,_0x4286a4=_0x55f923,_0x3179ff={'ARKEa':function(_0x5427d4,_0x3ccf94){return _0x5427d4(_0x3ccf94);}};this['x']=_0x3179ff[_0x4286a4(0x3e7,'1v*j')](eval,ShadowDragon['MC'][_0x405f74(0x40c)]),this['y']=_0x3179ff[_0x405f74(0x40b)](eval,ShadowDragon['MC'][_0x107d54(0x3b4)]);},Window_ItemConfirm[_0x205b7f(0x2be)][_0x205b7f(0x277)]=function(_0x5372b2){const _0x5e588b=_0x201252;this['_itemName']=_0x5372b2,this[_0x5e588b(0x253)]();},Window_ItemConfirm[_0x205b7f(0x2be)]['makeCommandList']=function(){const _0x3b2308=_0x201252,_0xd54a5b=_0x55f923,_0x522ba7=_0x205b7f,_0x58e431={'AmFGS':_0x522ba7(0x2c4),'hbire':_0xd54a5b(0x3d0,']Hbi'),'qWyVX':function(_0xdb637c,_0x4f05d0){return _0xdb637c+_0x4f05d0;},'ICgBv':_0xd54a5b(0x18b,'1nFh')};let _0x258fb5=_0x58e431[_0x3b2308(0x317)]['concat'](this[_0xd54a5b(0x3f0,'eCWV')]),_0x22149e=_0x58e431['hbire'][_0x3b2308(0x378)](this[_0x522ba7(0x251)]);if(this[_0x3b2308(0x34e)]){let _0x44d991=_0x58e431[_0xd54a5b(0x331,'1v*j')](_0x58e431[_0x3b2308(0x1fb)](this[_0xd54a5b(0x417,'w1Vk')](_0x258fb5),0x3c),this[_0x522ba7(0x2a3)]()),_0x300020=_0x58e431[_0x3b2308(0x1fb)](_0x58e431[_0x3b2308(0x1fb)](this[_0xd54a5b(0x3e0,'CfH&')](_0x22149e),0x3c),this['textPadding']());this[_0x3b2308(0x285)]=_0x44d991>=_0x300020?_0x44d991:_0x300020;}this[_0x3b2308(0x3c1)](_0x258fb5,_0x58e431['ICgBv']),this['addCommand'](_0x22149e,_0x3b2308(0x2bb));},Window_ItemConfirm[_0x55f923(0x34a,'xFN0')]['processOk']=function(){const _0x28b359=_0x201252,_0x51d7be=_0x55f923,_0x1125b6={'DTueL':function(_0x24ce06,_0x19e8a4){return _0x24ce06===_0x19e8a4;}};this[_0x51d7be(0x34f,'1nFh')]()?(_0x1125b6[_0x28b359(0x40f)](this[_0x28b359(0x218)]()['symbol'],_0x51d7be(0x401,'KcGh'))?this[_0x28b359(0x18c)]():this['playOkSound'](),this['updateInputData'](),this[_0x51d7be(0x3b6,'1v*j')](),this['callOkHandler']()):this[_0x28b359(0x210)]();},Window_ItemConfirm[_0x205b7f(0x2be)]['itemTextAlign']=function(){const _0x578308=_0x205b7f,_0x48a99c=_0x201252,_0x1b6ef3={'VvWQv':_0x48a99c(0x1a9)};return _0x1b6ef3[_0x578308(0x421)];},Window_ItemConfirm['prototype'][_0x55f923(0x3fa,'KcGh')]=function(_0xe473b7){const _0xf3b383=_0x205b7f,_0x2443d1=_0x55f923;let _0x3a7859=Window_Selectable[_0x2443d1(0x19a,'CN76')][_0xf3b383(0x262)][_0xf3b383(0x21a)](this,_0xe473b7);return _0x3a7859;},Scene_GameEnd[_0x201252(0x3fd)][_0x201252(0x24d)]=function(){const _0x465c44=_0x55f923,_0x72164e=_0x205b7f,_0x8002e1=_0x201252;Scene_MenuBase['prototype'][_0x8002e1(0x24d)]['call'](this),this[_0x72164e(0x242)](),this[_0x465c44(0x346,'eCWV')][_0x465c44(0x2ef,'yFKy')]=0x0;},Scene_GameEnd[_0x55f923(0x2a7,'[J2*')][_0x55f923(0x243,'K^GX')]=function(){const _0x14e301=_0x55f923,_0x561eb5=_0x201252,_0x510ab1=_0x205b7f;Scene_MenuBase[_0x510ab1(0x2be)][_0x561eb5(0x383)][_0x14e301(0x390,'0XcK')](this),this[_0x561eb5(0x2c3)][_0x14e301(0x2db,'z#u]')]();},Scene_GameEnd[_0x205b7f(0x2be)][_0x55f923(0x1e0,'IGzQ')]=function(){const _0x5e10e4=_0x201252,_0x553677=_0x55f923,_0x167ed9=_0x205b7f,_0xef86c1={'QpQVu':_0x167ed9(0x41d)},_0x5702cf='3|4|1|0|2'[_0x167ed9(0x40a)]('|');let _0x137f5d=0x0;while(!![]){switch(_0x5702cf[_0x137f5d++]){case'0':this['_commandWindow'][_0x167ed9(0x1bb)]('cancel',this[_0x167ed9(0x22d)]['bind'](this));continue;case'1':this[_0x553677(0x265,'RE4j')][_0x167ed9(0x1bb)](_0xef86c1[_0x5e10e4(0x3cd)],this['commandGameEnd'][_0x167ed9(0x260)](this));continue;case'2':this[_0x167ed9(0x3be)](this[_0x167ed9(0x30b)]);continue;case'3':this[_0x553677(0x35e,'e85J')]=new Window_GameEnd();continue;case'4':this[_0x167ed9(0x30b)][_0x167ed9(0x1bb)](_0x553677(0x20b,']Hbi'),this[_0x167ed9(0x2d9)][_0x5e10e4(0x2d1)](this));continue;}break;}},Scene_GameEnd[_0x201252(0x3fd)][_0x201252(0x3c2)]=function(){const _0x1facd7=_0x55f923,_0x2bb0d6=_0x201252;this[_0x2bb0d6(0x3a6)](),SceneManager[_0x1facd7(0x387,'e85J')](Scene_Title);},Scene_GameEnd[_0x201252(0x3fd)][_0x205b7f(0x392)]=function(){const _0x3dc3cb=_0x55f923,_0x1b92f7=_0x205b7f;this['_commandWindow'][_0x1b92f7(0x29d)](),this['fadeOutAll'](),SceneManager[_0x3dc3cb(0x42c,'dtM5')]();},Window_GameEnd[_0x55f923(0x315,'&GT5')][_0x205b7f(0x36d)]=function(_0x19d93b,_0xa1a5eb){const _0x101662=_0x205b7f,_0x1b5cc9=_0x55f923,_0x23cada=_0x201252;Window_Command[_0x23cada(0x3fd)][_0x1b5cc9(0x29a,'%!P2')][_0x1b5cc9(0x366,'&GT5')](this,_0x19d93b,_0xa1a5eb),this[_0x101662(0x42d)](),this['setBackgroundType'](0x2);},Window_GameEnd[_0x201252(0x3fd)][_0x201252(0x1cf)]=function(){const _0x1789c4=_0x205b7f,_0x157335=_0x55f923,_0x5538b1=_0x201252,_0x68c1db={'cyPIF':function(_0x4b39cb,_0x57c4c2){return _0x4b39cb<_0x57c4c2;},'yUrma':function(_0x5a949c,_0x3938ca){return _0x5a949c+_0x3938ca;},'HYpTj':function(_0x55776f,_0x5ca408){return _0x55776f<_0x5ca408;}};this[_0x5538b1(0x221)]();var _0x4d30e2=this['topIndex']();for(var _0x4a933c=0x0;_0x68c1db[_0x157335(0x348,'FO2x')](_0x4a933c,this[_0x1789c4(0x3ea)]());_0x4a933c++){var _0x2221a0=_0x68c1db[_0x157335(0x3c0,'UEWl')](_0x4d30e2,_0x4a933c);_0x68c1db[_0x1789c4(0x1a7)](_0x2221a0,this[_0x5538b1(0x3d7)]())&&this[_0x5538b1(0x38f)](_0x2221a0);}},Window_GameEnd[_0x201252(0x3fd)]['drawWindowBackground']=function(){const _0x2a0e36=_0x201252,_0x3e088e=_0x205b7f,_0x57c423={'KdcpM':_0x3e088e(0x3f2)};let _0x17e417=ImageManager['loadPicture'](_0x57c423[_0x2a0e36(0x2fe)]);if(_0x17e417){let _0x457f5d=_0x17e417[_0x2a0e36(0x285)],_0x2a8c35=_0x17e417[_0x3e088e(0x406)],_0x2bba5f=0x0,_0x457827=0x0,_0x167f7d=0x0,_0x434fa5=0x0,_0x3b8289=_0x457f5d,_0x1b287f=_0x2a8c35;this[_0x2a0e36(0x222)][_0x3e088e(0x3dc)](_0x17e417,_0x2bba5f,_0x457827,_0x457f5d,_0x2a8c35,_0x167f7d,_0x434fa5,_0x3b8289,_0x1b287f);}},Window_GameEnd[_0x205b7f(0x2be)][_0x55f923(0x212,'kJ3G')]=function(){const _0x1efd51=_0x55f923,_0x2dad81=_0x205b7f,_0x33194e=_0x201252,_0x5ba8d9={'AriaT':'toTitle','COHmn':_0x33194e(0x2d0),'GFUEE':_0x2dad81(0x423)};this[_0x33194e(0x3c1)](ShadowDragon['MC'][_0x1efd51(0x213,'eCWV')][0x0],_0x5ba8d9[_0x1efd51(0x3ae,'0XcK')]),this['addCommand'](ShadowDragon['MC'][_0x1efd51(0x1dd,'^iMI')][0x0],_0x5ba8d9[_0x33194e(0x3aa)]),this[_0x33194e(0x3c1)](ShadowDragon['MC']['_GEcmd3'][0x0],_0x5ba8d9[_0x2dad81(0x21e)]);},Window_GameEnd[_0x201252(0x3fd)][_0x205b7f(0x1c9)]=function(){const _0x444192=_0x201252,_0x1df36f=_0x205b7f,_0x3ef27d={'PlRqM':function(_0x593619,_0x5e748f){return _0x593619+_0x5e748f;},'WPSHA':function(_0x4fdbc9,_0x5510e4){return _0x4fdbc9(_0x5510e4);}};return _0x3ef27d[_0x1df36f(0x1fd)](_0x3ef27d['WPSHA'](eval,ShadowDragon['MC'][_0x444192(0x1df)]),0x28);},Window_GameEnd[_0x55f923(0x402,'r$HW')]['windowHeight']=function(){const _0x186eae=_0x205b7f,_0x2bcf02=_0x55f923,_0x421ad={'MNZuY':function(_0x3d2fde,_0x32758e){return _0x3d2fde+_0x32758e;},'LoDsE':function(_0x1cf711,_0x26fef9){return _0x1cf711(_0x26fef9);}};return _0x421ad[_0x2bcf02(0x2ce,'z#u]')](_0x421ad[_0x186eae(0x286)](eval,ShadowDragon['MC'][_0x186eae(0x396)]),0x28);},Window_GameEnd[_0x55f923(0x3ac,'CfH&')][_0x205b7f(0x42d)]=function(){const _0x1bc93c=_0x201252,_0x3fbf64=_0x205b7f,_0x528ae1={'DCZrq':function(_0x587a5b,_0x5f02f4){return _0x587a5b(_0x5f02f4);}};this['x']=_0x528ae1[_0x3fbf64(0x23e)](eval,ShadowDragon['MC']['_GEcmdWindow_x']),this['y']=_0x528ae1[_0x1bc93c(0x3c9)](eval,ShadowDragon['MC'][_0x1bc93c(0x198)]);},Window_GameEnd[_0x205b7f(0x2be)][_0x201252(0x1b9)]=function(){const _0x2ead78=_0x205b7f,_0x319828=_0x201252,_0x52f146={'TREgo':function(_0x1cd0c9,_0x2a4f4a){return _0x1cd0c9+_0x2a4f4a;}};return _0x52f146[_0x319828(0x38c)](ShadowDragon['MC'][_0x2ead78(0x42f)],ShadowDragon['MC']['_GEcmdLineHeight']);},Window_GameEnd[_0x55f923(0x336,'3n4K')]['drawItem']=function(_0x55d1d9){const _0x29f969=_0x201252,_0x59a99e=_0x205b7f,_0x55e8ca=_0x55f923,_0x55c665={'YEgem':function(_0x3b742c,_0x378208){return _0x3b742c===_0x378208;},'PWIXY':function(_0x3533fd,_0x6c0d27){return _0x3533fd+_0x6c0d27;},'UGASB':function(_0x56c9ac,_0x48d0d8){return _0x56c9ac/_0x48d0d8;},'DOlPb':function(_0x3f2364,_0x3a1789){return _0x3f2364(_0x3a1789);}};var _0x207ca0=this['itemRectForText'](_0x55d1d9),_0x4acf07=_0x55e8ca(0x2af,'CfH&');this[_0x59a99e(0x3fe)]();let _0x441d1f=ShadowDragon['MC'][_0x29f969(0x185)][_0x55d1d9][0x0];_0x55c665['YEgem'](this[_0x29f969(0x1db)]['y'],_0x207ca0['y'])&&(_0x441d1f=ShadowDragon['MC']['GEcommandList'][_0x55d1d9][0x1]);let _0x4e02d7=_0x55c665[_0x55e8ca(0x2b1,'#qvx')](_0x207ca0['x'],_0x55c665[_0x55e8ca(0x3ff,'bQ22')](_0x207ca0[_0x59a99e(0x281)],0x2)-_0x55c665[_0x55e8ca(0x36e,'LuUC')](ShadowDragon['MC'][_0x55e8ca(0x1aa,'xFN0')],0x2)),_0x49d6bf=_0x55c665[_0x55e8ca(0x22b,'[&f1')](_0x207ca0['y'],_0x55c665[_0x55e8ca(0x29f,'jp@@')](eval,ShadowDragon['MC']['_GEcmdPosY']));this[_0x55e8ca(0x1a3,'$4Uv')](_0x441d1f,_0x4e02d7,_0x49d6bf,_0x207ca0[_0x29f969(0x285)],_0x4acf07);},Window_GameEnd['prototype'][_0x205b7f(0x182)]=function(){const _0x43f3b4=_0x205b7f,_0x29f897=_0x55f923;Window[_0x29f897(0x2f1,'%!P2')][_0x43f3b4(0x182)][_0x43f3b4(0x21a)](this),this['_windowCursorSprite']['visible']=![],this[_0x43f3b4(0x29c)]();},Window_GameEnd[_0x205b7f(0x2be)][_0x205b7f(0x1ef)]=function(){return!![];},Window_GameEnd[_0x55f923(0x408,'j%Hz')][_0x201252(0x18c)]=function(){const _0x1be2c1=_0x55f923,_0x187cc4=_0x201252,_0x5b5138=_0x205b7f;SoundManager[_0x5b5138(0x18f)](),this[_0x187cc4(0x275)](),this[_0x1be2c1(0x3da,'eCWV')](),SceneManager[_0x5b5138(0x365)]();},Window_GameEnd[_0x55f923(0x3f5,'0XcK')][_0x201252(0x307)]=function(_0x26283d,_0xd59507){const _0x29deba=_0x205b7f,_0x30364e=_0x55f923,_0x5ac987=_0x201252;switch(_0x26283d){case'C':Imported['TSR_TextColorAddOn']?this['contents']['obtainColorsParam'](_0xd59507):this[_0x5ac987(0x1a2)](this['textColor'](this[_0x30364e(0x3e6,'3n4K')](_0xd59507)));break;case'I':this[_0x5ac987(0x2e4)](this[_0x30364e(0x344,'$4Uv')](_0xd59507),_0xd59507);break;case'{':this[_0x29deba(0x2c0)]();break;case'}':this['makeFontSmaller']();break;}},Window_GameEnd[_0x201252(0x3fd)][_0x201252(0x2e4)]=function(_0x5e95e5,_0x540b53){const _0x59f290=_0x55f923,_0x454275=_0x205b7f,_0x180b23=_0x201252,_0x3e7664={'HJWOg':_0x180b23(0x385),'jvnnu':function(_0x44d468,_0x534de6){return _0x44d468+_0x534de6;},'OrNIX':function(_0x1b3994,_0x2ca908){return _0x1b3994+_0x2ca908;}};let _0x73a3fb=ImageManager[_0x454275(0x2a6)](_0x3e7664[_0x59f290(0x28e,'3n4K')]),_0x27f177=ShadowDragon['MC'][_0x59f290(0x2b6,'l2&T')],_0x60cfab=ShadowDragon['MC'][_0x180b23(0x375)],_0x24bf9f=0x2;this['drawIcon'](_0x5e95e5,_0x540b53['x']+0x2,_0x3e7664[_0x59f290(0x1d8,'9I]k')](_0x540b53['y'],0x2),_0x27f177,_0x60cfab,_0x24bf9f,_0x73a3fb),_0x540b53['x']+=_0x3e7664['OrNIX'](_0x27f177,0x2);},Window_GameEnd[_0x201252(0x3fd)][_0x55f923(0x1e8,'[&f1')]=function(_0x48d6a7,_0x3ef51e,_0x3dd01f,_0x5175b5,_0x461fac,_0x5cb5fc,_0x5cd205){const _0x2c2440=_0x201252,_0x2bec6c=_0x55f923,_0x615e74={'igaCF':function(_0x22cd9a,_0x11bd63){return _0x22cd9a%_0x11bd63;},'mXjQz':function(_0x4608f4,_0xe144b8){return _0x4608f4*_0xe144b8;},'eHIgE':function(_0x5e18af,_0x2007ef){return _0x5e18af/_0x2007ef;}};let _0x523ff9=_0x5cd205,_0x31195b=_0x5175b5,_0x85728d=_0x461fac,_0x284a17=_0x31195b,_0xa5f770=_0x85728d,_0x1b1524=_0x615e74[_0x2bec6c(0x186,'KcGh')](_0x48d6a7,_0x5cb5fc)*_0x31195b,_0x2b7af1=_0x615e74['mXjQz'](Math[_0x2c2440(0x1f4)](_0x615e74[_0x2bec6c(0x1ce,'UEWl')](_0x48d6a7,_0x5cb5fc)),_0x85728d);this['contents']['blt'](_0x523ff9,_0x1b1524,_0x2b7af1,_0x31195b,_0x85728d,_0x3ef51e,_0x3dd01f,_0x284a17,_0xa5f770);};