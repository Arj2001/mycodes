export class CounterService{

    count: number = 0;

    increaseCount(){
        this.count = this.count + 1
    }
}