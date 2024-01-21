//Equivalent to Java's DoubleSummaryStatistics
//Read more: https://docs.oracle.com/javase/8/docs/api/java/util/DoubleSummaryStatistics.html
class DoubleSummaryStatistics {
    private count: number = 0;
    private sum: number = 0;
    private min: number = Number.POSITIVE_INFINITY;
    private max: number = Number.NEGATIVE_INFINITY;

    accept(value: number): void {
        this.count++;
        this.sum += value;
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
    }

    getAverage(): number {
        return this.count === 0 ? 0 : this.sum / this.count;
    }

    getCount(): number {
        return this.count;
    }

    getSum(): number {
        return this.sum;
    }

    getMin(): number {
        return this.min;
    }

    getMax(): number {
        return this.max;
    }
}

//Usage
const stats = new DoubleSummaryStatistics();
const numbers = [1.5, 2.3, 7.1, 4.2];

numbers.forEach(value => stats.accept(value));

console.log("Count:", stats.getCount());
console.log("Average:", stats.getAverage());
console.log("Sum:", stats.getSum());
console.log("Min:", stats.getMin());
console.log("Max:", stats.getMax());

const numbers02 = [1.5, 2.3, 7.1, 4.2];

const sum = numbers.reduce((acc, value) => acc + value, 0);
const average = sum / numbers.length;
const min = Math.min(...numbers);
const max = Math.max(...numbers);

