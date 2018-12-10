/**
 * Типы возможных действий над
 *
 * * */
import {VisibilityFilters} from "../actions";

export const SEARCH_TOWN = 'SEARCH_TOWN';
export const DELETE_TOWN = 'DELETE_TOWN';
export const ADD_PICKPOINT = 'ADD_PICKPOINT';
export const DELETE_PICKPOINT = 'DELETE_PICKPOINT';

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_WITH_PICKPOINTS : 'SHOW_WITH_PICK_POINTS',
    SHOW_WITHOUT_PICKPOINTS : 'SHOW_WITHOUT_PICKPOINTS'
};

export function searchTown (name) {
    return {
        type : SEARCH_TOWN,
        name
    }
}

export function deleteTown(index) {
    return {
        type : DELETE_TOWN,
        index
    }
}

export function addPickpoint(name) {
    return {
        type : ADD_PICKPOINT,
        name
    }
}

export function deletePickpoint(index) {
    return {
        type : DELETE_PICKPOINT,
        index
    }
}


