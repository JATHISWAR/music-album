import { Request, Response } from 'express';
const collections = [
  {
    id: "12345",
    name: "EPIC: The Troy Saga (Official Concept Album)",
    artist: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 5,
    durationInSeconds: 900,
    sizeInBytes: 48488,
    releasedOn: "2024-09-03T14:35:00Z",
    songs: [
      {
        title: "The Battle of Troy",
        durationInSeconds: 300,
        sizeInBytes: 48488,
        performers: ["Jorge Rivera-Herrans"]
      },
      {
        title: "The Fall of Troy",
        durationInSeconds: 300,
        sizeInBytes: 48488,
        performers: ["Jorge Rivera-Herrans"]
      },
      {
        title: "The Siege of Troy",
        durationInSeconds: 300,
        sizeInBytes: 48488,
        performers: ["Jorge Rivera-Herrans"]
      }
    ]
  },
  {
    id: "67890",
    name: "Another Album",
    artist: "Another Artist",
    type: "Album",
    songCount: 10,
    durationInSeconds: 3600,
    sizeInBytes: 150000,
    releasedOn: "2023-05-01T10:00:00Z",
    songs: [
      {
        title: "Song One",
        durationInSeconds: 180,
        sizeInBytes: 30000,
        performers: ["Another Artist"]
      },
      {
        title: "Song Two",
        durationInSeconds: 200,
        sizeInBytes: 35000,
        performers: ["Another Artist"]
      }
    ]
  }
];

export class CollectionsController {
  public getAllCollections(req: Request, res: Response): void {
    res.status(200).json(collections);
  }

  public getCollectionById(req: Request, res: Response): void {
    const collectionId = req.params.collectionName;
    const collection = collections.find(c => c.name === collectionId);

    if (collection) {
      res.status(200).json(collection);
    } else {
      res.status(404).json({ message: 'Collection not found' });
    }
  }
}