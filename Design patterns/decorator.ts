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

interface IDocument{
    getContent():string
}

//This is the core component — it holds the base text ("Hello World").
class PlainTextDocument implements IDocument{
private text:string;
constructor(text:string){
    this.text = text;
}
getContent():string{
    return this.text;
}
}

//The abstract decorator starts here:
abstract class  DocumentDecorator implements IDocument{
    protected document:IDocument;
    constructor(document:IDocument){
        this.document = document;
    }
    abstract getContent():string;
}


class BoldDecorator extends  DocumentDecorator{
    getContent():string{
        return `<BOLD>${this.document.getContent()}</BOLD>`
    }

    
}
class ItalicDecorator extends  DocumentDecorator{
    getContent():string{
        return `<ITALIC>${this.document.getContent()}</ITALIC>`
    }
    
}
class UnderlineDecorator extends  DocumentDecorator{
    getContent():string{
        return `<UNDERLINE>${this.document.getContent()}</UNDERLINE>`
    }
}
class HighlightDecorator extends  DocumentDecorator{
    getContent():string{
        return `<span style="background-color: yellow">${this.document.getContent()}</span>`;
    }
}

//decorator ends here
//yurakancyur decorator wrap e anum naxord:
let myDoc: IDocument = new PlainTextDocument("Hello World");
myDoc = new BoldDecorator(myDoc);
myDoc = new ItalicDecorator(myDoc);
myDoc= new  UnderlineDecorator(myDoc);
myDoc = new HighlightDecorator(myDoc);

console.log(myDoc.getContent());

