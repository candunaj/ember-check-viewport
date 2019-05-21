import Component from '@ember/component';

export default Component.extend({
    actions: {
        log(text){
            console.log(text);
        }
    }
});
