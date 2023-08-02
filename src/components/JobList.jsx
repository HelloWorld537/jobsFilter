import data from '../mock/data.json';
import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selector';
import { ADD_FILTER } from 'store/filters/filters-actions';
import { addFilter } from 'store/filters/filters-actions';
import { useCallback, useEffect } from 'react';
import { selectFilters } from 'store/filters/filters-selector';

const JobList = () => {
  const dispatch = useDispatch()

  const handleAddFilter = useCallback((filter) => {
    dispatch(addFilter(filter))
  }, [dispatch]);

  const currentFilters = useSelector(selectFilters)

  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))

  useEffect(() => {
    console.log(positions);
  }, [positions])

  return (
    <div className='job-list'>

      {positions.map(item => (
        <JobPosition key={item.id} {...item} handleAddFilter={handleAddFilter} />
      ))}
    </div>
  )
}

export { JobList };