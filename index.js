/**
 * @file mofron-effect-height/index.js
 * @brief height effect for mofron
 * @license MIT
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) size: from,to height
     *                key-value: effect config
     * @short height
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Height");
            this.shortForm("height");
            
            this.confmng().add("fromHeight", { type: "size" });
            this.confmng().add("toHeight",   { type: "size" });
            
	    this.speed(500);
            this.transition("height");
            
            this.beforeEvent(
                (eff) => {
                    try {
                        let hei = eff.confmng("fronHeight");
                        eff.component().style({
                            "height" : (null === hei) ? undefined : hei
                        });
		    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );

            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * @type private
     */
    contents (cmp) {
        try {
            cmp.height(this.toHeight());
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height getter/setter
     *
     * @param (size) height size of before effect
     * @param (size) height size of after effect
     * @return (size) height size of after effect
     * @type parameter
     */
    height (from, to) {
        try {
            this.fromHeight(from);
            return this.toHeight(to);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height getter/setter
     *
     * @param (size) height size of before effect
     * @return (size) height size of before effect
     * @type parameter
     */
    fromHeight (prm) {
        try {
            return this.confmng("fromHeight", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height setter/getter
     * 
     * @param (size) height size of after effect
     * @return (size) height size of after effect
     * @type parameter
     */
    toHeight (prm) {
        try {
            return this.confmng("toHeight", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
