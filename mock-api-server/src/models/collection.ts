export interface Collection {
    id: string;
    name: string;
    artist: string;
    type: 'EP' | 'Album' | 'Single';
    songCount: number;
    durationInSeconds: number;
    sizeInBytes: number;
    releasedOn: string; 
}

export interface Song {
    title: string;
    durationInSeconds: number;
    sizeInBytes: number;
    performers: string[];
}

export interface CollectionDetails extends Collection {
    songs: Song[];
}