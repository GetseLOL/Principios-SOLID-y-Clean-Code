type Size = "" | "small" | "medium" | "large";

class Product {
  constructor(
    public name: string = "",
    public price = 0,
    public size: Size = ""
  ) {}
  
  isProductReady():boolean {

    //Dry  
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>this[key]).length <= 0)
            throw new Error(`${key} is required`);
          break;

        case "number":
          if (<number>this[key] <= 0) throw new Error(`${key} is required`);
          break;

        default:
            throw new Error(`${key} is required`);
          break;
      }
    }

    return true
  }

  toString() {
    //No Dry
    // if (this.name.length <= 0) throw new Error("Name is required");
    // if (this.price <= 0) throw new Error("Price is required");
    // if (this.size.length <= 0) throw new Error("Size is required");
    if(!this.isProductReady) return

    return `${this.name}`;
  }
}

(() => {
  const bluePants = new Product("Blue");

  console.log(bluePants.toString());
})();
