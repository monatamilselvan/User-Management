import React, { useContext } from 'react';
import _ from 'lodash'
import { GlobalContext } from '../context/GlobalState'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = (props) => {
    const { users } = useContext(GlobalContext)
    const totalPageNumbers = Math.ceil(users.length / 5)
    const array = _.range(0, totalPageNumbers);
    const { handlePageChange, page } = props
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first onClick={() => handlePageChange(page-1)} disabled={page === 0} />
            </PaginationItem>
            {_.map(array, value => (
                <PaginationItem key={value}>
                    <PaginationLink onClick={() => handlePageChange(value)}>
                        {value}
                    </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem>
                <PaginationLink last onClick={() => handlePageChange(page+1)} disabled={_.last(array) === page} />
            </PaginationItem>
        </Pagination>
    );
}

export default Example;