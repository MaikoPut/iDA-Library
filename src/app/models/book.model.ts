import { User } from './user.model';

export interface IBook{
    id: string;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    loanedOut: Boolean;
    loanedBy: string;
    qrcode: string;
    tag: string;
}

export class Book implements IBook{
    id: string;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    loanedOut: Boolean;
    loanedBy: string;
    qrcode: string;
    tag: string;

    constructor(obj?: any){
        this.id = obj.id || '';
        this.title = obj.title || '';
        this.author = obj.author || '';
        this.description = obj.description || '';
        this.imageUrl = obj.imageUrl || '';
        this.loanedOut = obj.loanedOut || false;
        this.loanedBy = obj.loanedBy || '';
        this.qrcode = obj.qrcode || '';
        this.tag = obj.tag || '';
    }
}