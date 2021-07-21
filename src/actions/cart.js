export const addItemCart = ( GetDataList ) => ({
    type: 'add',
    payload: {
        id: GetDataList.id,
        picture: GetDataList.picture,
        description: GetDataList.description,
        name: GetDataList.name,
        price: GetDataList.price,
    }
})

export const deleteRowCart = ( GetRowToDelete ) => ({
    type: 'delete',
    payload: {
        GetRowToDelete
    }
})

export const cleanCartList = () => ({
    type: 'deleteall',
})


