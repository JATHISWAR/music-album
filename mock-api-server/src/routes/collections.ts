import { Router } from 'express';
import { CollectionsController } from '../controllers/collectionsController';

const router = Router();
const collectionsController = new CollectionsController();

router.get('/collections', collectionsController.getAllCollections.bind(collectionsController));
router.get('/collections/:collectionId', collectionsController.getCollectionById.bind(collectionsController));

export default router;