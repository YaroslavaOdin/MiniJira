export interface FilterStrategy {
    filter(items: any[], searchString: string): any[];
}

export class FilterContext {
    private strategy: any;

    constructor(strategy: any) {
        this.strategy = strategy;
    }

    public executeStrategy(items: any[], searchString: string): any[] {
        return this.strategy.filter(items, searchString);
    }
}

export class TaskFilterStrategy implements FilterStrategy {
    public filter(items: any[], searchString: string): any[] {
        if (searchString === "") {
            return items;
        }
        
        return items.filter((item) => item.name.toUpperCase().includes(searchString.toString().toUpperCase()));
    }
}

export class UserFilterStrategy implements FilterStrategy {
    public filter(items: any[], searchString: string): any[] {
        if (searchString === "") {
            return items;
        }

        return items.filter((item) => {
            const itemName: string = item.name + " " + item.surname;
            return itemName.toUpperCase().includes(searchString.toString().toUpperCase());
        });
    }
}