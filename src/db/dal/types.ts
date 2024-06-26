
export interface GetAllGenresFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}


export interface GetAllAuthorFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface GetAllBooksFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface GetAllUsersFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface GetAllCartsFilters {
    user?:number
    isDeleted?: boolean
    includeDeleted?: boolean
}
export interface GetAllOrdersFilters {
    user?:number
    isDeleted?: boolean
    includeDeleted?: boolean
}
