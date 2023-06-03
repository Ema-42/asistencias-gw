import { Version, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

const genCustomApiOperationContent = (summary: string) => ({
  summary,
});

export const VersionDescription = (version: string, summary: string) => {
  return applyDecorators(
    Version(version),
    ApiOperation(genCustomApiOperationContent(summary)),
  );
};
