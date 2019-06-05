function HtmlElement() {
    this.color = 'red';
    this.click = function() {
        console.log('clicked');
    };
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
};

function HtmlSelectElement(items = []) {
    this.items = items ? [...items] : [];

    this.addItem = function(item) {
        this.items.push(item);
    };
    this.removeItem = function(item) {
        let position = this.items.indexOf(item);
        if (~position) this.items.splice(position, 1);
    };
}

// this approach to inheritance will only inherit prototype members.
// it will not inherit instance members
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
