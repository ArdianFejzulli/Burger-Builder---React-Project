export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

// this will be use if we use refacotring our Reducer, to manage and to make more cleaner the switch cases.
// for now this isn't still used in our project.