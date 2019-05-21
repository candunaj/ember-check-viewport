import { Modifier } from 'ember-oo-modifiers';
import { later } from '@ember/runloop';

const checkViewport = Modifier.extend({
    visible: null,
    onEnterViewport: null,
    onExitViewport: null,
    timerId: null,

    didReceiveArguments(params, namedParams) {
        this.set('onEnterViewport', namedParams.onEnterViewport);
        this.set('onExitViewport', namedParams.onExitViewport);

        let enabled = !!namedParams.enabled;

        if(!enabled && this.get('timerId')){
            this.cancelCheck();
        }

        if(enabled && !this.get('timerId')){
            this.scheduleCheckInView();
        }
    },

    willDestroyElement(){
        this._super(...arguments);
        this.cancelCheck();
    },

    cancelCheck(){
        cancelAnimationFrame(this.get('timerId'));
        this.set('timerId', null);
        this.set('visible', null);
    },

    scheduleCheckInView(){
        let timerId = requestAnimationFrame(()=>{
            let isIn = this.isInView();
            if(isIn && this.get('visible')!==true){
                this.set('visible', true);
                if(this.get('onEnterViewport')){
                    this.get('onEnterViewport')();
                }
            }

            if(!isIn && this.get('visible')!==false){
                this.set('visible', false);
                if(this.get('onExitViewport')){
                    this.get('onExitViewport')();
                }
            }

            this.scheduleCheckInView();
        });

        this.set('timerId', timerId);
    },

    isInView() {
        try{
            let element = this.element;
            let winBottom = (window.innerHeight || document.documentElement.clientHeight);
            let winRight = (window.innerWidth || document.documentElement.clientWidth);
            var bounding = element.getBoundingClientRect();

            return (this.isBetween(0, winBottom, bounding.top) ||
                this.isBetween(0, winBottom, bounding.bottom) ||
                (bounding.top<0 && bounding.bottom>winBottom)) &&
                (this.isBetween(0, winRight, bounding.left) ||
                    this.isBetween(0, winRight, bounding.right) ||
                    (bounding.left<0 && bounding.right>winRight));
        }
        catch(err){
            return false;
        }
    },

    isBetween(from,to, x){
        return x>=from && x<=to;
    }

});

export default Modifier.modifier(checkViewport);
