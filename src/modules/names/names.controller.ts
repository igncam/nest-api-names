import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { NamesService } from './names.service';
@ApiTags('names')
@Controller('api/v1/names')
export class NamesController {
  constructor(private namesService: NamesService) {}
  @ApiBody({
    description: 'Añadir un nombre',
    examples: {
      ejemplo1: {
        value: {
          name: 'Ignacio',
        },
      },
    },
  })
  @Post()
  @ApiOperation({
    description:
      'Crea un nuevo nombre. retorna true si se inserta correctamente',
  })
  createName(@Body() data: { name: string }) {
    return this.namesService.createName(data.name);
  }
  @ApiOperation({
    description: 'Devuelve todos los nombres',
  })
  @Get()
  getNames(@Query('start') start: string) {
    return this.namesService.getNames(start);
  }
  @ApiOperation({
    description:
      'Actualiza el nombre del primer parametro por el nombre del segundo',
  })
  @ApiParam({
    name: 'name',
    type: 'string',
    description: 'Nombre Original',
  })
  @Put('/:name/:newName')
  updateName(@Param('name') name: string, @Param('newName') newName: string) {
    return this.namesService.updateName(name, newName);
  }
  @ApiOperation({
    description: 'Elimina todos los nombres',
  })
  @Delete('clear')
  clearNames() {
    return this.namesService.clearNames();
  }
  @ApiOperation({
    description: 'Elimina el nombre',
  })
  @Delete('/:name')
  deleteName(@Param('name') name: string) {
    return this.namesService.deleteName(name);
  }
}
