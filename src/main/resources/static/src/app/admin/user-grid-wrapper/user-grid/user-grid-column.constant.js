/**
 * Created by eryk on 10.05.17.
 */
export default [
    {
        headerName: 'Nazwa użytkownika',
        field: 'username'
    },
    {
        headerName: 'Rola',
        field: 'userRole',
        minWidth: 30,
        valueGetter: (params) => {
            if (params.data.userRole === 'ADMIN') {
                return 'Administrator'
            }
            return 'Przewodnik';
        }
    },
    {
        headerName: 'Adres e-mail',
        field: 'email',
        minWidth: 30,
    },
    {
        headerName: 'Aktywny',
        field: 'enabled',
        minWidth: 30,
        valueGetter: (params) => {
            if (params.data.enabled) {
                return 'Tak'
            }
            return 'Nie';
        }
    }
]
