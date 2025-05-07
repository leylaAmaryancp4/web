/*You are building a Document Editor where users can format text dynamically.
Define an interface Document:
getContent(): string
Create a concrete class PlainTextDocument.
Create decorator classes:
BoldDecorator
ItalicDecorator
UnderlineDecorator
HighlightDecorator
Each decorator should:
Implement Document interface.
Wrap another Document.
Modify the getContent() result to apply formatting.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//This is the core component — it holds the base text ("Hello World").
var PlainTextDocument = /** @class */ (function () {
    function PlainTextDocument(text) {
        this.text = text;
    }
    PlainTextDocument.prototype.getContent = function () {
        return this.text;
    };
    return PlainTextDocument;
}());
//The abstract decorator:
var DocumentDecorator = /** @class */ (function () {
    function DocumentDecorator(document) {
        this.document = document;
    }
    return DocumentDecorator;
}());
var BoldDecorator = /** @class */ (function (_super) {
    __extends(BoldDecorator, _super);
    function BoldDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldDecorator.prototype.getContent = function () {
        return "<BOLD>".concat(this.document.getContent(), "</BOLD>");
    };
    return BoldDecorator;
}(DocumentDecorator));
var ItalicDecorator = /** @class */ (function (_super) {
    __extends(ItalicDecorator, _super);
    function ItalicDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicDecorator.prototype.getContent = function () {
        return "<ITALIC>".concat(this.document.getContent(), "</ITALIC>");
    };
    return ItalicDecorator;
}(DocumentDecorator));
var UnderlineDecorator = /** @class */ (function (_super) {
    __extends(UnderlineDecorator, _super);
    function UnderlineDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnderlineDecorator.prototype.getContent = function () {
        return "<UNDERLINE>".concat(this.document.getContent(), "</UNDERLINE>");
    };
    return UnderlineDecorator;
}(DocumentDecorator));
var HighlightDecorator = /** @class */ (function (_super) {
    __extends(HighlightDecorator, _super);
    function HighlightDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HighlightDecorator.prototype.getContent = function () {
        return "<span style=\"background-color: yellow\">".concat(this.document.getContent(), "</span>");
    };
    return HighlightDecorator;
}(DocumentDecorator));
//yurakancyur decorator wrap e anum naxord:
var myDoc = new PlainTextDocument("Hello World");
myDoc = new BoldDecorator(myDoc);
myDoc = new ItalicDecorator(myDoc);
myDoc = new UnderlineDecorator(myDoc);
myDoc = new HighlightDecorator(myDoc);
console.log(myDoc.getContent());
