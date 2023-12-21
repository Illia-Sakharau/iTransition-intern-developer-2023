import { FC } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";


const InfiniteScrollBlock: FC = () => {
  const { page } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setPage, setSize } = personsParams.actions;
  
  const loadHandle = () => {
    if (page === 1) {
      dispatch(setSize(10))
      dispatch(setPage(3))
    } else {
      dispatch(setPage(page + 1))
    }
  }

  return (
    <InfiniteScroll
            loadMore={loadHandle}
            hasMore={true}
    ><span></span></InfiniteScroll>
  );
};

export default InfiniteScrollBlock;
