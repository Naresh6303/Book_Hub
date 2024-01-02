import React from 'react'
import '../../Styles/Favourites.css'

const Favourites = ({ cart, setCart }) => {
    return (
        <div>
            <h2 className='fav_books'>Favourites <sup className='length'>{cart.length}</sup></h2>
            {cart.map((data) => {
                return (
                    <>
                        <div className="fav_flex">
                            <div className="fav_book">
                                <div className="fav_img">
                                    <img className='add_img' src={data.thumbnailUrl} alt="" />
                                </div>

                                <div className="content_add">
                                    <div className='add_title'>
                                        {data.title}
                                    </div>
                                    <div className="authors">
                                        {data.authors}
                                    </div>

                                    <div className="catogiries">
                                        {data.categories}
                                    </div>

                                    <div className="pages">
                                        {data.pageCount}
                                    </div>

                                    <div>
                                        <button className="rem_fav">Remove from favourites</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            {/* {
            cart.map((data)=>{
                return(
                    console.log(data.title)
                )
            })
        } */}
        </div>
    )
}

export default Favourites