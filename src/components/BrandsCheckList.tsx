import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Devices.Slice';
import c from '../styles/BrandsCheckList.module.scss'
import { fetchBrands } from '../API/fetchBrands';
import { takeType } from '../API/fetchType';
import { useLocation } from 'react-router-dom';





export default function BrandsCheckList() {

    const [list, setList] = React.useState<string[] | []>([])
    const brandsStore = useAppSelector(state => state.brandReducer)
   
    
    const location = useLocation()
    const typeByCurrentUrl  = location.pathname.replaceAll('/', '')

    const dispatch = useAppDispatch()

    const dispacth = useAppDispatch()

    window.onpopstate = e => {
      
        dispatch(addSelectedBrands([]))
       

    }

   


    React.useEffect(() => {

        if (typeByCurrentUrl.includes('search')) {
            // in case we have search page just fetch all brands to list 
            fetchBrands().then(res => setList(res as string[] | []))
            return;
        }

        //fetch brands which alow this category => phone/apple / samsung / ...

        console.log(typeByCurrentUrl,'ENOMY')

        takeType(typeByCurrentUrl).then(res => setList(res.brands)).then(res => console.log(res))

    }, [typeByCurrentUrl])




    function handleSelect(event: React.MouseEvent<HTMLInputElement>) {

        const value = (event.target as HTMLInputElement).value;
        const isChecked = (event.target as HTMLInputElement).checked;

        if (isChecked) {

            dispacth(addSelectedBrands([...brandsStore.selectedBrands, value]))

        } else {

            const filteredList = brandsStore.selectedBrands.filter((item) => item !== value);
            dispacth(addSelectedBrands(filteredList))

        }

        //reset 
        dispacth(setCurrentPage(1))

    };


    return (
        <div className={c.cheklist_container}>

            <div>
                <h2>Select Brands</h2>
            </div>
            <div >
                {brandsStore.loading ?
                    null
                    :
                    list?.map((item: string) =>
                        <div key={item} >
                            <label className={c.container}>{item}

                                {(brandsStore.selectedBrands as string[]).includes(item) ?
                                    <input
                                        checked={true}
                                        name="brands"
                                        onChange={() => { }}
                                        value={item}
                                        onClick={handleSelect}
                                        type="checkbox">
                                    </input>
                                    :
                                    <input
                                        checked={false}
                                        name="brands"
                                        onChange={() => { }}
                                        value={item}
                                        onClick={handleSelect}
                                        type="checkbox">
                                    </input>
                                }

                                <span className={c.checkmark}></span>
                            </label>
                        </div>


                    )}

            </div>

        </div>

    )
}


