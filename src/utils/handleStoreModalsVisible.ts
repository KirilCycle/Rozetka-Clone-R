import { setVisibility } from "../store/features/CatalogVisibility";
import { useAppDispatch } from "../store/hooks";



const dispatch = useAppDispatch()

export function handleStoreModalsVisible (bool: boolean) {
    dispatch(setVisibility(bool ));
}

