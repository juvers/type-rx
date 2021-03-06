// Interface

export interface Game{
    category: string,
    id: number,
    type?: string
}  


 export function TGame(): Game{
    return{
        category: "Judek",
        id: 23,
        type: "Typo"
    }
}

