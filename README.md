# Simple Checkout

This is an example simulating a Java interface in type script.

```java
  Checkout co = new Checkout(pricingRules);
  co.scan(item1);
  co.scan(item2);
  co.total();
```

Where we initialise a Checkout instance with a given rule set, scan items and calculate a total with the discount rule set applied.


## Setup

Use a package manager `npm`, `yarn` or `pnpm`. I used `npm`.

Install packages:
```bash
  npm i
```

Run examples:
```bash
  npm run examples
```

Run tests:
```bash
  npm test
```

## Approach taken

I followed Onion architecture and light functional programming ideas. Concepts explored in the books Gorkking Simplicity and Domain Modeling made Functional. We first focus on the domain types as they're the simplest to define; They require no logic and serve as documentation for the problem space. Then we move on to business logic as pure functions to encapsulate the behavior of the domain. Lastly, tackle system effects, if we were productionising this example this would be the Database interactions and API responses. Discount rules were approached last and isolated in a separate folder. This would be the area of most frequent change in the system. While currently they're maintained in code, these could be lifted to an external store and applied dynamically. This would allow rules to be maintained by a sales team and other features like publishing for certain time frames.

### Improvements 

This isn't necessarily the final code, but it does satisfy the constraints. Things like how the cart stores items are subjective and would vary based on the context of specific cart requirements. I was thinking an `Item` might have variants (Small, Medium, Larger or Blue, Red, Green) and still fall under the same SKU. So the whole `Item` object is scanned into the cart. If this wasn't the case you could aggregate items in a cart simply as `{ sku: number, count: number }` and look up products in a dictionary to retrieve a price and multiply the count by the price for a total.

For this reason of ambiguity of cart structure another nice to have would be to define `cartMapper` something to map functions to the cart. Currently in `tallyTotal` we have to know the underlying structure of the cart to effectively tally a total. While not significant in a small POC it could become a pain point if regularly accessed.