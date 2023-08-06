// c'est une classe qui contient is Loading pour afficher le spinner de chargement
// il va nous aide beacoup

export class BaseService {
    isLoading : Boolean = false;

    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }
}