import { connect } from 'react-redux';
import TownList from '../components/TownsList';
import {VisibilityFilters} from "../../actions";
import TodoList from "../../components/TodoList";

const getVisibleTowns = (towns, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return towns;
        case 'SHOW_WITH_PICKPOINTS':
            return towns.filter(t => t.numberOfPickpoints > 0);
        case 'SHOW_WITHOUT_PICKPOINTS':
            return towns.filter(t => t.numberOfPickpoints == 0);
    }
};

const mapStateToProps = state => {
    towns : getVisibleTowns(state.towns, state.selectedFilter)
};

const VisibilitiTownList = connect(
    mapStateToProps,
    undefined
) (TodoList);

export default VisibilitiTownList;