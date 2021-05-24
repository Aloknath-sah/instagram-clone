import React, { useReducer, useRef } from 'react';
import { useFetch, useInfiniteScroll, useLazyLoading } from "./dtCustomHooks";

const Explore = () => {
    const imgReducer = (state, action) => {
        switch (action.type) {
            case "STACK_IMAGES":
            return { ...state, images: state.images.concat(action.images) };
            case "FETCHING_IMAGES":
            return { ...state, fetching: action.fetching };
            default:
            return state;
        }
    };
    
    const pageReducer = (state, action) => {
        switch (action.type) {
            case "ADVANCE_PAGE":
            return { ...state, page: state.page + 1 };
            default:
            return state;
        }
    };
    
    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
    const [imgData, imgDispatch] = useReducer(imgReducer, {
        images: [],
        fetching: true
    });
    
    let bottomBoundaryRef = useRef(null);
    useFetch(pager, imgDispatch);
    useLazyLoading(".card-img-top", imgData.images);
    useInfiniteScroll(bottomBoundaryRef, pagerDispatch);
    
    return (
        <div className="row" style={{marginLeft:"1%", marginTop:"5%"}}>
            <div className="col-sm-12 col-md-6 col-lg-4">
                {imgData.images.map((image, index) => {
                const { author, download_url } = image;
                return (
                    <img
                        key={index}
                        alt={author}
                        style={{padding:"1%"}}
                        src={download_url}
                        width="300px"
                    />
                );
            })}
            </div>
        </div>
    );
}

export default Explore;
