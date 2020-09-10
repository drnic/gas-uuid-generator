import { uuidv1, uuidv4, guid } from './uuid'

/**
 * Random UUID v4
 *
 * For example, 8996200c-715f-4b2d-9d70-374312cba12b
 *
 * @customFunction
 */
// (global as any).UUIDV4 = uuidv4;

/**
 * Random UUID v1
 *
 * For example, 1cd66a24-f367-11ea-adc1-0242ac120002
 *
 * @customFunction
 */
// (global as any).UUIDV1 = uuidv1;

/**
 * Random GUID
 *
 * For example, 8672d7f5-3551-4b98-82b7-c1fecc8fb91c
 *
 * @customFunction
 */
(global as any).GUID = guid;
