import { Path } from "../routeNames";

type Args =
    | { path: Path.Home }
    | { path: Path.GenderCategory; params: { gender: string } }
    | {
        path: Path.GenderCategoryDetails;
        params: { gender: string; id: string };
    }
    |
    {
        path: Path.ProductType;
        params: { gender: string; productType: string };
    }
    |
    {
        path: Path.ProductTypeDetails;
        params: { gender: string; productType: string, id: string };
    }
    | { path: Path.Cart }
    | { path: Path.Admin }

type ArgsWithParams = Extract<Args, { path: any; params: any }>;

export const createPath = (args: Args) => {

    if (args.hasOwnProperty('params') === false) {
       return args.path
    }
 
    return Object.entries((args as ArgsWithParams).params).reduce(
       (previousValue: string, [param, value]) => {
          return previousValue.replace(`:${param}`, value)
       }, args.path);
 }
 