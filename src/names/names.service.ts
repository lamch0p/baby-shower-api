import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class NamesService {
  generateCount(count: number, scramble: boolean) {
    return this.generateCountOfSex(null, count, scramble);
  }

  generateCountOfSex(sex: string | any, count: number, scramble: boolean) {
    let names = [] as string[];
    let scrambledNames = [] as string[];
    while (names.length < count) {
      const name = sex
        ? faker.name.firstName(sex).toUpperCase()
        : faker.name.firstName();
      if (!names.includes(name)) {
        names.push(name);
        if (scramble) {
          scrambledNames.push(this.shuffle(name));
        }
      }
    }
    if (scramble) {
      return {
        names: names,
        scrambled: scrambledNames,
      };
    } else {
      return {
        names: names,
      };
    }
  }

  shuffle(value: string): string {
    return faker.helpers.shuffle(Array.from(value)).join('');
  }
}
