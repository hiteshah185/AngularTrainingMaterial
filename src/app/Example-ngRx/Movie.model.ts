export class Movie {
    id!: number;
    name: string;
    earning: number;
    releaseDate: Date;
    userName: string;
    constructor(
        name?: string,
        earning?: number,
        releaseDate?: Date,
        userName?: string
    ) {
        this.name = name || '';
        this.earning = earning || 0;
        this.releaseDate = releaseDate || new Date();
        this.userName = userName || 'Teraneter';
    }
}
export interface IMovie {
    id: number;
    name: string;
    earning: number;
    releaseDate?: Date;
    userName: string;
    celebrity?: number
}
export interface ICelebrity {
    id: number;
    name: string;
    description?: string;
    nickname?: string;
    awards?: string[];
    filmography?: string[];
    debut?: number;
    productionCompany?: string
}