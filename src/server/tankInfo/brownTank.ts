import { clone } from 'lodash';
import { Wall } from '../wall';
import { Position } from './baseTank';
import { Vector } from './baseTank';
import { BaseTank } from './baseTank';
import { IConstructorTankObjectInterface } from './constructorTankObjectInterface';
import { EnemyTank } from './enemyTank';

// this tank doesnt move just shoots towards opponent if sees them directly (doesnt look for bounce shots)

export class BrownTank extends EnemyTank {
    constructor(constructorObj: IConstructorTankObjectInterface) { 
        super(constructorObj);
    }

    public shoot(width: number, height: number, enemies: BaseTank[], walls: Wall[], wallSize: number) {
        return this.directLineOfSightToShoot(width, height, enemies, walls, wallSize, this.getBulletPosition(), this.rotationGun);
    }
}