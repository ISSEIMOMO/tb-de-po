
// =================================================================== //
// ==========		Plugin Provided by ShadowDragon			========== //
// ========== 				Easy Currency					========== //
// =================================================================== //
/*:
*
* @author ShadowDragon
* @plugindesc Easy Currency for visibility
*
*
* @help
* 
* Make Gold more fun with the suffix (compability with YEP plugins.)
* tired of seeing 1000, 1000000, 1000000000 or more to a Quadrillion?
* if you use Yanfly YEP_CoreEngine you would see 1,000 or 100,000,000 or if you overlap "A Lotte" or any text.
*
* This plugin you would see 1k for Thousand, 1M for a Million, 1B for a Billion, 1T for a Trillion, 1Q for a Quadrillion.
* I make it so you can set your own like 1k, 1Mil, 1Bil, 1Tril, 1Quad or your own names.
*
* Fix in shops now show correctly the suffixes and period, also compability to YEP_X_MoreCurrency.
*
* KNOWN ISSUES:
* None at the moment.
* 
* TERMS OF USE:
* 
* Both for non-commercial and commercial use.
* Credit must be to ShadowDragon, YoraeRasante and TSR, The Northern Frog
* 
* Date + Version
* 19-02-2020 Version 0.10 first release
* 28-03-2020 fixed period between large numbers
* 20-08-2020 fixes shop item prices and YEP_X_MoreCurrency compability
* =========================================================
*
* @param Currency Prefix
* @desc How to show the currency? Period or Suffix
* @default Suffix
*
* @param Max Gold
* @desc Max Gold the player can carry.
* When installed YEP_CoreEngine, this does nothing.
* @type number
* @min 1
* default 99999999
* @default 99999999
*
* @param 1,000
* @desc Name for "Thousand"
* @default K
*
* @param 1,000,000
* @desc Name for "Million"
* @default M
*
* @param 1,000,000,000
* @desc Name for "Billion"
* @default B
*
* @param 1,000,000,000,000
* @desc Name for "Trillion"
* @default T
*
* @param 1,000,000,000,000,000
* @desc Name for "Quadrillion"
* @default Q
*
*/

	var Imported = Imported || {};
		Imported["ShadowDragon EC"] = "0.3.0";

	var ShadowDragon = ShadowDragon || {};
    	ShadowDragon.EC = ShadowDragon.EC || {};
 

(function() {	

	ShadowDragon.parameters = PluginManager.parameters("ShadowDragon_EC");
   
    //Currency setting to show "Comma" or "Suffix" (without quotes)
	ShadowDragon.EC 	= String(ShadowDragon.parameters["Currency Prefix"] || "Suffix");
	ShadowDragon.K 		= String(ShadowDragon.parameters["1,000"] || "K");
	ShadowDragon.M 		= String(ShadowDragon.parameters["1,000,000"] || "M");
	ShadowDragon.B 		= String(ShadowDragon.parameters["1,000,000,000"] || "B");
	ShadowDragon.T 		= String(ShadowDragon.parameters["1,000,000,000,000"] || "T");
	ShadowDragon.Q 		= String(ShadowDragon.parameters["1,000,000,000,000,000"] || "Q");

	// Currency Multi (not yet available)
	ShadowDragon.MG		= String(ShadowDragon.parameters["Max Gold"] || 99999999);
	/*
	ShadowDragon.GtS	= parseInt(ShadowDragon.Param["Gold to Silver"] || 100);
	ShadowDragon.StC	= parseInt(ShadowDragon.Param["Silver to Copper"] || 100);
	ShadowDragon.Gi		= parseInt(ShadowDragon.Param["Gold Icon"] || 163);
	ShadowDragon.Si		= parseInt(ShadowDragon.Param["Silver Icon"] || 160);
	ShadowDragon.Ci		= parseInt(ShadowDragon.Param["Copper Icon"] || 162);
   */

    ShadowDragon_EC_DCV = Window_Base.prototype.drawCurrencyValue;
    Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
		    ShadowDragon_EC_DCV.call(this, this.convertToEasyCurrencyNumber(value), unit, x, y, width);
    };
     
    // BurningOrca 28.08.2020 created this function to handle values that are already pure string not containing any number.
    // that are passed to Window_Base.prototype.drawCurrencyValue by my own plugin.
    Window_Base.prototype.convertToEasyCurrencyNumber = function(value) 
    {
        var numValue = value;

        numValue = this.stringToNumber(value);

        if( Number.isNaN(numValue) ) 
            return value;

        return this.EasyCurrency(numValue);
    }
    
    Window_Base.prototype.stringToNumber = function(value) {
        if (typeof value === 'string') {
           value = value.replace(/,/g, '');
	      value = parseInt(value)
        }
        return value
    };
	
	Window_Base.prototype.EasyCurrency = function(value) {
		switch (ShadowDragon.EC.toLowerCase()) {
		case "period":
			return value.toLocaleString();
            break;
		
		// Thanks to YoraeRasante, the suffix has been fixed.
		//Suffix "" (none), "K" (1000), "M" (Million), "B" (Billion), "T" (Trillion), "Q" (Quadrillion) (not need, but who knows who!)
		case "suffix":
			var suffix = ["", ShadowDragon.K, ShadowDragon.M, ShadowDragon.B, ShadowDragon.T, ShadowDragon.Q]; //["", "K", "M", "B", "T", "Q"];
			var suffixNr = Math.ceil((""+value).length/3)-1;
			var shValue = (suffixNr !=0 ? Math.floor((value / Math.pow(1000,suffixNr))*10)/10 : value);
			return shValue + suffix[suffixNr];
            break;
			
		} 
    };

    // BurningOrca 28.08.2020: Removed code about Window_ShopBuy.prototype.drawItem as it has been repeated with the exact same
    // code by The Northern Frog outside of this self calling function.
    
    if (Imported.YEP_X_MoreCurrencies) {
        ShadowDragon_EC_dAC = Window_Base.prototype.drawAltCurrency;
        Window_Base.prototype.drawAltCurrency = function(value, unit, wx, wy, ww) {
            
            // EasyCurrency compability to YEP_X_MoreCurrency
            let text = Yanfly.Util.toGroup(value);
                text = this.convertToEasyCurrencyNumber(text);
 
            return ShadowDragon_EC_dAC.call(this, text, unit, wx, wy, ww);
        };

        // BurningOrca 28.08.2020: Added so that the width needed for the value is calculated correctly.
        ShadowDragon_EC_gcGW = Window_Base.prototype.getcurrencyGoldWidth;
        Window_Base.prototype.getcurrencyGoldWidth = function(value) {
            value = this.convertToEasyCurrencyNumber(value);
            return ShadowDragon_EC_gcGW.call(this, value);
        }
    }

    if( !Imported.YEP_ShopMenuCore )  // BurningOrca 28.08.2020: Added so that Yanfly's changes to the drawing function are not lost.
{
     Window_ShopBuy.prototype.drawItem = function(index) {
        var item = this._data[index];
        var rect = this.itemRect(index);
        var priceWidth = 96;
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);
        let price = this.price(item);
        price = this.convertToEasyCurrencyNumber(price);
        this.drawText(price, rect.x + rect.width - priceWidth, rect.y, priceWidth, 'right');
        this.changePaintOpacity(true);
    };
}

	Game_Party.prototype.maxGold = function() {
		if (Imported.YEP_CoreEngine) {
			return eval(Yanfly.Param.MaxGold);
	} else {
		
		return eval(ShadowDragon.MG);
	}}

})();


//======== By TSR, The Northern Frog ============================================




//=== Window_ShopBuy ============



//=== END =========================================================
//======================================================================================