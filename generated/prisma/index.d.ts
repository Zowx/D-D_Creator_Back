
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model Trait
 * 
 */
export type Trait = $Result.DefaultSelection<Prisma.$TraitPayload>
/**
 * Model RaceTrait
 * 
 */
export type RaceTrait = $Result.DefaultSelection<Prisma.$RaceTraitPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Ability
 * 
 */
export type Ability = $Result.DefaultSelection<Prisma.$AbilityPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Background
 * 
 */
export type Background = $Result.DefaultSelection<Prisma.$BackgroundPayload>
/**
 * Model Background_Skill
 * 
 */
export type Background_Skill = $Result.DefaultSelection<Prisma.$Background_SkillPayload>
/**
 * Model Alignment
 * 
 */
export type Alignment = $Result.DefaultSelection<Prisma.$AlignmentPayload>
/**
 * Model PlayerSkill
 * 
 */
export type PlayerSkill = $Result.DefaultSelection<Prisma.$PlayerSkillPayload>
/**
 * Model SavingThrows
 * 
 */
export type SavingThrows = $Result.DefaultSelection<Prisma.$SavingThrowsPayload>
/**
 * Model CharacterAbility
 * 
 */
export type CharacterAbility = $Result.DefaultSelection<Prisma.$CharacterAbilityPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model CharacterLanguage
 * 
 */
export type CharacterLanguage = $Result.DefaultSelection<Prisma.$CharacterLanguagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Characters
 * const characters = await prisma.character.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Characters
   * const characters = await prisma.character.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trait`: Exposes CRUD operations for the **Trait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traits
    * const traits = await prisma.trait.findMany()
    * ```
    */
  get trait(): Prisma.TraitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceTrait`: Exposes CRUD operations for the **RaceTrait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceTraits
    * const raceTraits = await prisma.raceTrait.findMany()
    * ```
    */
  get raceTrait(): Prisma.RaceTraitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ability`: Exposes CRUD operations for the **Ability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abilities
    * const abilities = await prisma.ability.findMany()
    * ```
    */
  get ability(): Prisma.AbilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.background`: Exposes CRUD operations for the **Background** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backgrounds
    * const backgrounds = await prisma.background.findMany()
    * ```
    */
  get background(): Prisma.BackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.background_Skill`: Exposes CRUD operations for the **Background_Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Background_Skills
    * const background_Skills = await prisma.background_Skill.findMany()
    * ```
    */
  get background_Skill(): Prisma.Background_SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alignment`: Exposes CRUD operations for the **Alignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alignments
    * const alignments = await prisma.alignment.findMany()
    * ```
    */
  get alignment(): Prisma.AlignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerSkill`: Exposes CRUD operations for the **PlayerSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSkills
    * const playerSkills = await prisma.playerSkill.findMany()
    * ```
    */
  get playerSkill(): Prisma.PlayerSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savingThrows`: Exposes CRUD operations for the **SavingThrows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingThrows
    * const savingThrows = await prisma.savingThrows.findMany()
    * ```
    */
  get savingThrows(): Prisma.SavingThrowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterAbility`: Exposes CRUD operations for the **CharacterAbility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterAbilities
    * const characterAbilities = await prisma.characterAbility.findMany()
    * ```
    */
  get characterAbility(): Prisma.CharacterAbilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterLanguage`: Exposes CRUD operations for the **CharacterLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterLanguages
    * const characterLanguages = await prisma.characterLanguage.findMany()
    * ```
    */
  get characterLanguage(): Prisma.CharacterLanguageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Character: 'Character',
    Race: 'Race',
    Trait: 'Trait',
    RaceTrait: 'RaceTrait',
    Class: 'Class',
    Ability: 'Ability',
    Skill: 'Skill',
    Background: 'Background',
    Background_Skill: 'Background_Skill',
    Alignment: 'Alignment',
    PlayerSkill: 'PlayerSkill',
    SavingThrows: 'SavingThrows',
    CharacterAbility: 'CharacterAbility',
    Language: 'Language',
    CharacterLanguage: 'CharacterLanguage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "character" | "race" | "trait" | "raceTrait" | "class" | "ability" | "skill" | "background" | "background_Skill" | "alignment" | "playerSkill" | "savingThrows" | "characterAbility" | "language" | "characterLanguage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      Trait: {
        payload: Prisma.$TraitPayload<ExtArgs>
        fields: Prisma.TraitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          findFirst: {
            args: Prisma.TraitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          findMany: {
            args: Prisma.TraitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          create: {
            args: Prisma.TraitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          createMany: {
            args: Prisma.TraitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          delete: {
            args: Prisma.TraitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          update: {
            args: Prisma.TraitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          deleteMany: {
            args: Prisma.TraitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          upsert: {
            args: Prisma.TraitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          aggregate: {
            args: Prisma.TraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrait>
          }
          groupBy: {
            args: Prisma.TraitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraitCountArgs<ExtArgs>
            result: $Utils.Optional<TraitCountAggregateOutputType> | number
          }
        }
      }
      RaceTrait: {
        payload: Prisma.$RaceTraitPayload<ExtArgs>
        fields: Prisma.RaceTraitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceTraitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceTraitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>
          }
          findFirst: {
            args: Prisma.RaceTraitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceTraitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>
          }
          findMany: {
            args: Prisma.RaceTraitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>[]
          }
          create: {
            args: Prisma.RaceTraitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>
          }
          createMany: {
            args: Prisma.RaceTraitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceTraitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>[]
          }
          delete: {
            args: Prisma.RaceTraitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>
          }
          update: {
            args: Prisma.RaceTraitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>
          }
          deleteMany: {
            args: Prisma.RaceTraitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceTraitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceTraitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>[]
          }
          upsert: {
            args: Prisma.RaceTraitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTraitPayload>
          }
          aggregate: {
            args: Prisma.RaceTraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceTrait>
          }
          groupBy: {
            args: Prisma.RaceTraitGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceTraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceTraitCountArgs<ExtArgs>
            result: $Utils.Optional<RaceTraitCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Ability: {
        payload: Prisma.$AbilityPayload<ExtArgs>
        fields: Prisma.AbilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findFirst: {
            args: Prisma.AbilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findMany: {
            args: Prisma.AbilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          create: {
            args: Prisma.AbilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          createMany: {
            args: Prisma.AbilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          delete: {
            args: Prisma.AbilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          update: {
            args: Prisma.AbilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          deleteMany: {
            args: Prisma.AbilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          upsert: {
            args: Prisma.AbilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          aggregate: {
            args: Prisma.AbilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbility>
          }
          groupBy: {
            args: Prisma.AbilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilityCountArgs<ExtArgs>
            result: $Utils.Optional<AbilityCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Background: {
        payload: Prisma.$BackgroundPayload<ExtArgs>
        fields: Prisma.BackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          findFirst: {
            args: Prisma.BackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          findMany: {
            args: Prisma.BackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          create: {
            args: Prisma.BackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          createMany: {
            args: Prisma.BackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackgroundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          delete: {
            args: Prisma.BackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          update: {
            args: Prisma.BackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          deleteMany: {
            args: Prisma.BackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BackgroundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          upsert: {
            args: Prisma.BackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          aggregate: {
            args: Prisma.BackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackground>
          }
          groupBy: {
            args: Prisma.BackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<BackgroundCountAggregateOutputType> | number
          }
        }
      }
      Background_Skill: {
        payload: Prisma.$Background_SkillPayload<ExtArgs>
        fields: Prisma.Background_SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Background_SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Background_SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>
          }
          findFirst: {
            args: Prisma.Background_SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Background_SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>
          }
          findMany: {
            args: Prisma.Background_SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>[]
          }
          create: {
            args: Prisma.Background_SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>
          }
          createMany: {
            args: Prisma.Background_SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Background_SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>[]
          }
          delete: {
            args: Prisma.Background_SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>
          }
          update: {
            args: Prisma.Background_SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>
          }
          deleteMany: {
            args: Prisma.Background_SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Background_SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Background_SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>[]
          }
          upsert: {
            args: Prisma.Background_SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_SkillPayload>
          }
          aggregate: {
            args: Prisma.Background_SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackground_Skill>
          }
          groupBy: {
            args: Prisma.Background_SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<Background_SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.Background_SkillCountArgs<ExtArgs>
            result: $Utils.Optional<Background_SkillCountAggregateOutputType> | number
          }
        }
      }
      Alignment: {
        payload: Prisma.$AlignmentPayload<ExtArgs>
        fields: Prisma.AlignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>
          }
          findFirst: {
            args: Prisma.AlignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>
          }
          findMany: {
            args: Prisma.AlignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>[]
          }
          create: {
            args: Prisma.AlignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>
          }
          createMany: {
            args: Prisma.AlignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>[]
          }
          delete: {
            args: Prisma.AlignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>
          }
          update: {
            args: Prisma.AlignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>
          }
          deleteMany: {
            args: Prisma.AlignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>[]
          }
          upsert: {
            args: Prisma.AlignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentPayload>
          }
          aggregate: {
            args: Prisma.AlignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlignment>
          }
          groupBy: {
            args: Prisma.AlignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AlignmentCountAggregateOutputType> | number
          }
        }
      }
      PlayerSkill: {
        payload: Prisma.$PlayerSkillPayload<ExtArgs>
        fields: Prisma.PlayerSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>
          }
          findFirst: {
            args: Prisma.PlayerSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>
          }
          findMany: {
            args: Prisma.PlayerSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>[]
          }
          create: {
            args: Prisma.PlayerSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>
          }
          createMany: {
            args: Prisma.PlayerSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>[]
          }
          delete: {
            args: Prisma.PlayerSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>
          }
          update: {
            args: Prisma.PlayerSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>
          }
          deleteMany: {
            args: Prisma.PlayerSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>[]
          }
          upsert: {
            args: Prisma.PlayerSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSkillPayload>
          }
          aggregate: {
            args: Prisma.PlayerSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerSkill>
          }
          groupBy: {
            args: Prisma.PlayerSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerSkillCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerSkillCountAggregateOutputType> | number
          }
        }
      }
      SavingThrows: {
        payload: Prisma.$SavingThrowsPayload<ExtArgs>
        fields: Prisma.SavingThrowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingThrowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingThrowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>
          }
          findFirst: {
            args: Prisma.SavingThrowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingThrowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>
          }
          findMany: {
            args: Prisma.SavingThrowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>[]
          }
          create: {
            args: Prisma.SavingThrowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>
          }
          createMany: {
            args: Prisma.SavingThrowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavingThrowsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>[]
          }
          delete: {
            args: Prisma.SavingThrowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>
          }
          update: {
            args: Prisma.SavingThrowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>
          }
          deleteMany: {
            args: Prisma.SavingThrowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingThrowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavingThrowsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>[]
          }
          upsert: {
            args: Prisma.SavingThrowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingThrowsPayload>
          }
          aggregate: {
            args: Prisma.SavingThrowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavingThrows>
          }
          groupBy: {
            args: Prisma.SavingThrowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingThrowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingThrowsCountArgs<ExtArgs>
            result: $Utils.Optional<SavingThrowsCountAggregateOutputType> | number
          }
        }
      }
      CharacterAbility: {
        payload: Prisma.$CharacterAbilityPayload<ExtArgs>
        fields: Prisma.CharacterAbilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterAbilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterAbilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>
          }
          findFirst: {
            args: Prisma.CharacterAbilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterAbilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>
          }
          findMany: {
            args: Prisma.CharacterAbilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>[]
          }
          create: {
            args: Prisma.CharacterAbilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>
          }
          createMany: {
            args: Prisma.CharacterAbilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterAbilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>[]
          }
          delete: {
            args: Prisma.CharacterAbilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>
          }
          update: {
            args: Prisma.CharacterAbilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>
          }
          deleteMany: {
            args: Prisma.CharacterAbilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterAbilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterAbilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>[]
          }
          upsert: {
            args: Prisma.CharacterAbilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAbilityPayload>
          }
          aggregate: {
            args: Prisma.CharacterAbilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterAbility>
          }
          groupBy: {
            args: Prisma.CharacterAbilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterAbilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterAbilityCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterAbilityCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      CharacterLanguage: {
        payload: Prisma.$CharacterLanguagePayload<ExtArgs>
        fields: Prisma.CharacterLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>
          }
          findFirst: {
            args: Prisma.CharacterLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>
          }
          findMany: {
            args: Prisma.CharacterLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>[]
          }
          create: {
            args: Prisma.CharacterLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>
          }
          createMany: {
            args: Prisma.CharacterLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterLanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>[]
          }
          delete: {
            args: Prisma.CharacterLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>
          }
          update: {
            args: Prisma.CharacterLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>
          }
          deleteMany: {
            args: Prisma.CharacterLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterLanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>[]
          }
          upsert: {
            args: Prisma.CharacterLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterLanguagePayload>
          }
          aggregate: {
            args: Prisma.CharacterLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterLanguage>
          }
          groupBy: {
            args: Prisma.CharacterLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterLanguageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    character?: CharacterOmit
    race?: RaceOmit
    trait?: TraitOmit
    raceTrait?: RaceTraitOmit
    class?: ClassOmit
    ability?: AbilityOmit
    skill?: SkillOmit
    background?: BackgroundOmit
    background_Skill?: Background_SkillOmit
    alignment?: AlignmentOmit
    playerSkill?: PlayerSkillOmit
    savingThrows?: SavingThrowsOmit
    characterAbility?: CharacterAbilityOmit
    language?: LanguageOmit
    characterLanguage?: CharacterLanguageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    playerSkills: number
    abilities: number
    languages: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerSkills?: boolean | CharacterCountOutputTypeCountPlayerSkillsArgs
    abilities?: boolean | CharacterCountOutputTypeCountAbilitiesArgs
    languages?: boolean | CharacterCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountPlayerSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSkillWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountAbilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterAbilityWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterLanguageWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    Race: number
    Trait: number
    traits: number
    Character: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Race?: boolean | RaceCountOutputTypeCountRaceArgs
    Trait?: boolean | RaceCountOutputTypeCountTraitArgs
    traits?: boolean | RaceCountOutputTypeCountTraitsArgs
    Character?: boolean | RaceCountOutputTypeCountCharacterArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountRaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountTraitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraitWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountTraitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceTraitWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountCharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type TraitCountOutputType
   */

  export type TraitCountOutputType = {
    Race: number
    races: number
  }

  export type TraitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Race?: boolean | TraitCountOutputTypeCountRaceArgs
    races?: boolean | TraitCountOutputTypeCountRacesArgs
  }

  // Custom InputTypes
  /**
   * TraitCountOutputType without action
   */
  export type TraitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraitCountOutputType
     */
    select?: TraitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TraitCountOutputType without action
   */
  export type TraitCountOutputTypeCountRaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }

  /**
   * TraitCountOutputType without action
   */
  export type TraitCountOutputTypeCountRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceTraitWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    savingThrows: number
    Character: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savingThrows?: boolean | ClassCountOutputTypeCountSavingThrowsArgs
    Character?: boolean | ClassCountOutputTypeCountCharacterArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSavingThrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountCharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type AbilityCountOutputType
   */

  export type AbilityCountOutputType = {
    class: number
    CharacterAbility: number
  }

  export type AbilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | AbilityCountOutputTypeCountClassArgs
    CharacterAbility?: boolean | AbilityCountOutputTypeCountCharacterAbilityArgs
  }

  // Custom InputTypes
  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityCountOutputType
     */
    select?: AbilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeCountCharacterAbilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterAbilityWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    ability: number
    playerSkill: number
    Background_Skill: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | SkillCountOutputTypeCountAbilityArgs
    playerSkill?: boolean | SkillCountOutputTypeCountPlayerSkillArgs
    Background_Skill?: boolean | SkillCountOutputTypeCountBackground_SkillArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountAbilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountPlayerSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountBackground_SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Background_SkillWhereInput
  }


  /**
   * Count Type BackgroundCountOutputType
   */

  export type BackgroundCountOutputType = {
    skills: number
  }

  export type BackgroundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | BackgroundCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * BackgroundCountOutputType without action
   */
  export type BackgroundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundCountOutputType
     */
    select?: BackgroundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BackgroundCountOutputType without action
   */
  export type BackgroundCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Background_SkillWhereInput
  }


  /**
   * Count Type AlignmentCountOutputType
   */

  export type AlignmentCountOutputType = {
    Character: number
  }

  export type AlignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | AlignmentCountOutputTypeCountCharacterArgs
  }

  // Custom InputTypes
  /**
   * AlignmentCountOutputType without action
   */
  export type AlignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentCountOutputType
     */
    select?: AlignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlignmentCountOutputType without action
   */
  export type AlignmentCountOutputTypeCountCharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type PlayerSkillCountOutputType
   */

  export type PlayerSkillCountOutputType = {
    Skill: number
  }

  export type PlayerSkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Skill?: boolean | PlayerSkillCountOutputTypeCountSkillArgs
  }

  // Custom InputTypes
  /**
   * PlayerSkillCountOutputType without action
   */
  export type PlayerSkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkillCountOutputType
     */
    select?: PlayerSkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerSkillCountOutputType without action
   */
  export type PlayerSkillCountOutputTypeCountSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    characters: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | LanguageCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterLanguageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    raceId: number | null
    classId: number | null
    backgroundId: number | null
    alignmentId: number | null
    xp: number | null
    level: number | null
    AC: number | null
    speed: number | null
    hp: number | null
    max_hp: number | null
    temp_hp: number | null
    age: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: bigint | null
    raceId: bigint | null
    classId: bigint | null
    backgroundId: bigint | null
    alignmentId: bigint | null
    xp: number | null
    level: number | null
    AC: number | null
    speed: number | null
    hp: number | null
    max_hp: number | null
    temp_hp: number | null
    age: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: bigint | null
    raceId: bigint | null
    classId: bigint | null
    backgroundId: bigint | null
    alignmentId: bigint | null
    xp: number | null
    level: number | null
    name: string | null
    player: string | null
    AC: number | null
    speed: number | null
    hp: number | null
    max_hp: number | null
    temp_hp: number | null
    personality: string | null
    ideals: string | null
    bonds: string | null
    flaws: string | null
    age: number | null
    height: string | null
    weight: string | null
    eyes: string | null
    skin: string | null
    hair: string | null
    appearance: string | null
    allies: string | null
    backstory: string | null
    treasure: string | null
    traits: string | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: bigint | null
    raceId: bigint | null
    classId: bigint | null
    backgroundId: bigint | null
    alignmentId: bigint | null
    xp: number | null
    level: number | null
    name: string | null
    player: string | null
    AC: number | null
    speed: number | null
    hp: number | null
    max_hp: number | null
    temp_hp: number | null
    personality: string | null
    ideals: string | null
    bonds: string | null
    flaws: string | null
    age: number | null
    height: string | null
    weight: string | null
    eyes: string | null
    skin: string | null
    hair: string | null
    appearance: string | null
    allies: string | null
    backstory: string | null
    treasure: string | null
    traits: string | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    raceId: number
    classId: number
    backgroundId: number
    alignmentId: number
    xp: number
    level: number
    name: number
    player: number
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: number
    ideals: number
    bonds: number
    flaws: number
    age: number
    height: number
    weight: number
    eyes: number
    skin: number
    hair: number
    appearance: number
    allies: number
    backstory: number
    treasure: number
    traits: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    raceId?: true
    classId?: true
    backgroundId?: true
    alignmentId?: true
    xp?: true
    level?: true
    AC?: true
    speed?: true
    hp?: true
    max_hp?: true
    temp_hp?: true
    age?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    raceId?: true
    classId?: true
    backgroundId?: true
    alignmentId?: true
    xp?: true
    level?: true
    AC?: true
    speed?: true
    hp?: true
    max_hp?: true
    temp_hp?: true
    age?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    raceId?: true
    classId?: true
    backgroundId?: true
    alignmentId?: true
    xp?: true
    level?: true
    name?: true
    player?: true
    AC?: true
    speed?: true
    hp?: true
    max_hp?: true
    temp_hp?: true
    personality?: true
    ideals?: true
    bonds?: true
    flaws?: true
    age?: true
    height?: true
    weight?: true
    eyes?: true
    skin?: true
    hair?: true
    appearance?: true
    allies?: true
    backstory?: true
    treasure?: true
    traits?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    raceId?: true
    classId?: true
    backgroundId?: true
    alignmentId?: true
    xp?: true
    level?: true
    name?: true
    player?: true
    AC?: true
    speed?: true
    hp?: true
    max_hp?: true
    temp_hp?: true
    personality?: true
    ideals?: true
    bonds?: true
    flaws?: true
    age?: true
    height?: true
    weight?: true
    eyes?: true
    skin?: true
    hair?: true
    appearance?: true
    allies?: true
    backstory?: true
    treasure?: true
    traits?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    raceId?: true
    classId?: true
    backgroundId?: true
    alignmentId?: true
    xp?: true
    level?: true
    name?: true
    player?: true
    AC?: true
    speed?: true
    hp?: true
    max_hp?: true
    temp_hp?: true
    personality?: true
    ideals?: true
    bonds?: true
    flaws?: true
    age?: true
    height?: true
    weight?: true
    eyes?: true
    skin?: true
    hair?: true
    appearance?: true
    allies?: true
    backstory?: true
    treasure?: true
    traits?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: bigint
    raceId: bigint
    classId: bigint
    backgroundId: bigint
    alignmentId: bigint
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    classId?: boolean
    backgroundId?: boolean
    alignmentId?: boolean
    xp?: boolean
    level?: boolean
    name?: boolean
    player?: boolean
    AC?: boolean
    speed?: boolean
    hp?: boolean
    max_hp?: boolean
    temp_hp?: boolean
    personality?: boolean
    ideals?: boolean
    bonds?: boolean
    flaws?: boolean
    age?: boolean
    height?: boolean
    weight?: boolean
    eyes?: boolean
    skin?: boolean
    hair?: boolean
    appearance?: boolean
    allies?: boolean
    backstory?: boolean
    treasure?: boolean
    traits?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
    alignment?: boolean | AlignmentDefaultArgs<ExtArgs>
    playerSkills?: boolean | Character$playerSkillsArgs<ExtArgs>
    abilities?: boolean | Character$abilitiesArgs<ExtArgs>
    languages?: boolean | Character$languagesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    classId?: boolean
    backgroundId?: boolean
    alignmentId?: boolean
    xp?: boolean
    level?: boolean
    name?: boolean
    player?: boolean
    AC?: boolean
    speed?: boolean
    hp?: boolean
    max_hp?: boolean
    temp_hp?: boolean
    personality?: boolean
    ideals?: boolean
    bonds?: boolean
    flaws?: boolean
    age?: boolean
    height?: boolean
    weight?: boolean
    eyes?: boolean
    skin?: boolean
    hair?: boolean
    appearance?: boolean
    allies?: boolean
    backstory?: boolean
    treasure?: boolean
    traits?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
    alignment?: boolean | AlignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    classId?: boolean
    backgroundId?: boolean
    alignmentId?: boolean
    xp?: boolean
    level?: boolean
    name?: boolean
    player?: boolean
    AC?: boolean
    speed?: boolean
    hp?: boolean
    max_hp?: boolean
    temp_hp?: boolean
    personality?: boolean
    ideals?: boolean
    bonds?: boolean
    flaws?: boolean
    age?: boolean
    height?: boolean
    weight?: boolean
    eyes?: boolean
    skin?: boolean
    hair?: boolean
    appearance?: boolean
    allies?: boolean
    backstory?: boolean
    treasure?: boolean
    traits?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
    alignment?: boolean | AlignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    raceId?: boolean
    classId?: boolean
    backgroundId?: boolean
    alignmentId?: boolean
    xp?: boolean
    level?: boolean
    name?: boolean
    player?: boolean
    AC?: boolean
    speed?: boolean
    hp?: boolean
    max_hp?: boolean
    temp_hp?: boolean
    personality?: boolean
    ideals?: boolean
    bonds?: boolean
    flaws?: boolean
    age?: boolean
    height?: boolean
    weight?: boolean
    eyes?: boolean
    skin?: boolean
    hair?: boolean
    appearance?: boolean
    allies?: boolean
    backstory?: boolean
    treasure?: boolean
    traits?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "classId" | "backgroundId" | "alignmentId" | "xp" | "level" | "name" | "player" | "AC" | "speed" | "hp" | "max_hp" | "temp_hp" | "personality" | "ideals" | "bonds" | "flaws" | "age" | "height" | "weight" | "eyes" | "skin" | "hair" | "appearance" | "allies" | "backstory" | "treasure" | "traits", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
    alignment?: boolean | AlignmentDefaultArgs<ExtArgs>
    playerSkills?: boolean | Character$playerSkillsArgs<ExtArgs>
    abilities?: boolean | Character$abilitiesArgs<ExtArgs>
    languages?: boolean | Character$languagesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
    alignment?: boolean | AlignmentDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
    alignment?: boolean | AlignmentDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
      background: Prisma.$BackgroundPayload<ExtArgs>
      alignment: Prisma.$AlignmentPayload<ExtArgs>
      playerSkills: Prisma.$PlayerSkillPayload<ExtArgs>[]
      abilities: Prisma.$CharacterAbilityPayload<ExtArgs>[]
      languages: Prisma.$CharacterLanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      raceId: bigint
      classId: bigint
      backgroundId: bigint
      alignmentId: bigint
      xp: number
      level: number
      name: string
      player: string
      AC: number
      speed: number
      hp: number
      max_hp: number
      temp_hp: number
      personality: string
      ideals: string
      bonds: string
      flaws: string
      age: number
      height: string
      weight: string
      eyes: string
      skin: string
      hair: string
      appearance: string
      allies: string
      backstory: string
      treasure: string
      traits: string
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    background<T extends BackgroundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BackgroundDefaultArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alignment<T extends AlignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlignmentDefaultArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playerSkills<T extends Character$playerSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Character$playerSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    abilities<T extends Character$abilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Character$abilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    languages<T extends Character$languagesArgs<ExtArgs> = {}>(args?: Subset<T, Character$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'BigInt'>
    readonly raceId: FieldRef<"Character", 'BigInt'>
    readonly classId: FieldRef<"Character", 'BigInt'>
    readonly backgroundId: FieldRef<"Character", 'BigInt'>
    readonly alignmentId: FieldRef<"Character", 'BigInt'>
    readonly xp: FieldRef<"Character", 'Int'>
    readonly level: FieldRef<"Character", 'Int'>
    readonly name: FieldRef<"Character", 'String'>
    readonly player: FieldRef<"Character", 'String'>
    readonly AC: FieldRef<"Character", 'Int'>
    readonly speed: FieldRef<"Character", 'Int'>
    readonly hp: FieldRef<"Character", 'Int'>
    readonly max_hp: FieldRef<"Character", 'Int'>
    readonly temp_hp: FieldRef<"Character", 'Int'>
    readonly personality: FieldRef<"Character", 'String'>
    readonly ideals: FieldRef<"Character", 'String'>
    readonly bonds: FieldRef<"Character", 'String'>
    readonly flaws: FieldRef<"Character", 'String'>
    readonly age: FieldRef<"Character", 'Int'>
    readonly height: FieldRef<"Character", 'String'>
    readonly weight: FieldRef<"Character", 'String'>
    readonly eyes: FieldRef<"Character", 'String'>
    readonly skin: FieldRef<"Character", 'String'>
    readonly hair: FieldRef<"Character", 'String'>
    readonly appearance: FieldRef<"Character", 'String'>
    readonly allies: FieldRef<"Character", 'String'>
    readonly backstory: FieldRef<"Character", 'String'>
    readonly treasure: FieldRef<"Character", 'String'>
    readonly traits: FieldRef<"Character", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.playerSkills
   */
  export type Character$playerSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    where?: PlayerSkillWhereInput
    orderBy?: PlayerSkillOrderByWithRelationInput | PlayerSkillOrderByWithRelationInput[]
    cursor?: PlayerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerSkillScalarFieldEnum | PlayerSkillScalarFieldEnum[]
  }

  /**
   * Character.abilities
   */
  export type Character$abilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    where?: CharacterAbilityWhereInput
    orderBy?: CharacterAbilityOrderByWithRelationInput | CharacterAbilityOrderByWithRelationInput[]
    cursor?: CharacterAbilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterAbilityScalarFieldEnum | CharacterAbilityScalarFieldEnum[]
  }

  /**
   * Character.languages
   */
  export type Character$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    where?: CharacterLanguageWhereInput
    orderBy?: CharacterLanguageOrderByWithRelationInput | CharacterLanguageOrderByWithRelationInput[]
    cursor?: CharacterLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterLanguageScalarFieldEnum | CharacterLanguageScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    id: number | null
    subraceOfId: number | null
  }

  export type RaceSumAggregateOutputType = {
    id: bigint | null
    subraceOfId: bigint | null
  }

  export type RaceMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    subraceOfId: bigint | null
  }

  export type RaceMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    subraceOfId: bigint | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    subraceOfId: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    id?: true
    subraceOfId?: true
  }

  export type RaceSumAggregateInputType = {
    id?: true
    subraceOfId?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subraceOfId?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subraceOfId?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subraceOfId?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: bigint
    name: string
    description: string
    subraceOfId: bigint | null
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subraceOfId?: boolean
    Race?: boolean | Race$RaceArgs<ExtArgs>
    subrace_of?: boolean | Race$subrace_ofArgs<ExtArgs>
    Trait?: boolean | Race$TraitArgs<ExtArgs>
    traits?: boolean | Race$traitsArgs<ExtArgs>
    Character?: boolean | Race$CharacterArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subraceOfId?: boolean
    subrace_of?: boolean | Race$subrace_ofArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subraceOfId?: boolean
    subrace_of?: boolean | Race$subrace_ofArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    subraceOfId?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "subraceOfId", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Race?: boolean | Race$RaceArgs<ExtArgs>
    subrace_of?: boolean | Race$subrace_ofArgs<ExtArgs>
    Trait?: boolean | Race$TraitArgs<ExtArgs>
    traits?: boolean | Race$traitsArgs<ExtArgs>
    Character?: boolean | Race$CharacterArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subrace_of?: boolean | Race$subrace_ofArgs<ExtArgs>
  }
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subrace_of?: boolean | Race$subrace_ofArgs<ExtArgs>
  }

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      Race: Prisma.$RacePayload<ExtArgs>[]
      subrace_of: Prisma.$RacePayload<ExtArgs> | null
      Trait: Prisma.$TraitPayload<ExtArgs>[]
      traits: Prisma.$RaceTraitPayload<ExtArgs>[]
      Character: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      subraceOfId: bigint | null
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Race<T extends Race$RaceArgs<ExtArgs> = {}>(args?: Subset<T, Race$RaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subrace_of<T extends Race$subrace_ofArgs<ExtArgs> = {}>(args?: Subset<T, Race$subrace_ofArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Trait<T extends Race$TraitArgs<ExtArgs> = {}>(args?: Subset<T, Race$TraitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    traits<T extends Race$traitsArgs<ExtArgs> = {}>(args?: Subset<T, Race$traitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Character<T extends Race$CharacterArgs<ExtArgs> = {}>(args?: Subset<T, Race$CharacterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'BigInt'>
    readonly name: FieldRef<"Race", 'String'>
    readonly description: FieldRef<"Race", 'String'>
    readonly subraceOfId: FieldRef<"Race", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.Race
   */
  export type Race$RaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race.subrace_of
   */
  export type Race$subrace_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
  }

  /**
   * Race.Trait
   */
  export type Race$TraitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    where?: TraitWhereInput
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    cursor?: TraitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Race.traits
   */
  export type Race$traitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    where?: RaceTraitWhereInput
    orderBy?: RaceTraitOrderByWithRelationInput | RaceTraitOrderByWithRelationInput[]
    cursor?: RaceTraitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceTraitScalarFieldEnum | RaceTraitScalarFieldEnum[]
  }

  /**
   * Race.Character
   */
  export type Race$CharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model Trait
   */

  export type AggregateTrait = {
    _count: TraitCountAggregateOutputType | null
    _avg: TraitAvgAggregateOutputType | null
    _sum: TraitSumAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  export type TraitAvgAggregateOutputType = {
    id: number | null
  }

  export type TraitSumAggregateOutputType = {
    id: bigint | null
  }

  export type TraitMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type TraitMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type TraitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TraitAvgAggregateInputType = {
    id?: true
  }

  export type TraitSumAggregateInputType = {
    id?: true
  }

  export type TraitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TraitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TraitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trait to aggregate.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Traits
    **/
    _count?: true | TraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraitMaxAggregateInputType
  }

  export type GetTraitAggregateType<T extends TraitAggregateArgs> = {
        [P in keyof T & keyof AggregateTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrait[P]>
      : GetScalarType<T[P], AggregateTrait[P]>
  }




  export type TraitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraitWhereInput
    orderBy?: TraitOrderByWithAggregationInput | TraitOrderByWithAggregationInput[]
    by: TraitScalarFieldEnum[] | TraitScalarFieldEnum
    having?: TraitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraitCountAggregateInputType | true
    _avg?: TraitAvgAggregateInputType
    _sum?: TraitSumAggregateInputType
    _min?: TraitMinAggregateInputType
    _max?: TraitMaxAggregateInputType
  }

  export type TraitGroupByOutputType = {
    id: bigint
    name: string
    description: string
    _count: TraitCountAggregateOutputType | null
    _avg: TraitAvgAggregateOutputType | null
    _sum: TraitSumAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  type GetTraitGroupByPayload<T extends TraitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraitGroupByOutputType[P]>
            : GetScalarType<T[P], TraitGroupByOutputType[P]>
        }
      >
    >


  export type TraitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    Race?: boolean | Trait$RaceArgs<ExtArgs>
    races?: boolean | Trait$racesArgs<ExtArgs>
    _count?: boolean | TraitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type TraitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["trait"]>
  export type TraitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Race?: boolean | Trait$RaceArgs<ExtArgs>
    races?: boolean | Trait$racesArgs<ExtArgs>
    _count?: boolean | TraitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TraitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TraitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TraitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trait"
    objects: {
      Race: Prisma.$RacePayload<ExtArgs>[]
      races: Prisma.$RaceTraitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
    }, ExtArgs["result"]["trait"]>
    composites: {}
  }

  type TraitGetPayload<S extends boolean | null | undefined | TraitDefaultArgs> = $Result.GetResult<Prisma.$TraitPayload, S>

  type TraitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraitCountAggregateInputType | true
    }

  export interface TraitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trait'], meta: { name: 'Trait' } }
    /**
     * Find zero or one Trait that matches the filter.
     * @param {TraitFindUniqueArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraitFindUniqueArgs>(args: SelectSubset<T, TraitFindUniqueArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraitFindUniqueOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraitFindUniqueOrThrowArgs>(args: SelectSubset<T, TraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindFirstArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraitFindFirstArgs>(args?: SelectSubset<T, TraitFindFirstArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindFirstOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraitFindFirstOrThrowArgs>(args?: SelectSubset<T, TraitFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traits
     * const traits = await prisma.trait.findMany()
     * 
     * // Get first 10 Traits
     * const traits = await prisma.trait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traitWithIdOnly = await prisma.trait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraitFindManyArgs>(args?: SelectSubset<T, TraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trait.
     * @param {TraitCreateArgs} args - Arguments to create a Trait.
     * @example
     * // Create one Trait
     * const Trait = await prisma.trait.create({
     *   data: {
     *     // ... data to create a Trait
     *   }
     * })
     * 
     */
    create<T extends TraitCreateArgs>(args: SelectSubset<T, TraitCreateArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traits.
     * @param {TraitCreateManyArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraitCreateManyArgs>(args?: SelectSubset<T, TraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Traits and returns the data saved in the database.
     * @param {TraitCreateManyAndReturnArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraitCreateManyAndReturnArgs>(args?: SelectSubset<T, TraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trait.
     * @param {TraitDeleteArgs} args - Arguments to delete one Trait.
     * @example
     * // Delete one Trait
     * const Trait = await prisma.trait.delete({
     *   where: {
     *     // ... filter to delete one Trait
     *   }
     * })
     * 
     */
    delete<T extends TraitDeleteArgs>(args: SelectSubset<T, TraitDeleteArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trait.
     * @param {TraitUpdateArgs} args - Arguments to update one Trait.
     * @example
     * // Update one Trait
     * const trait = await prisma.trait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraitUpdateArgs>(args: SelectSubset<T, TraitUpdateArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traits.
     * @param {TraitDeleteManyArgs} args - Arguments to filter Traits to delete.
     * @example
     * // Delete a few Traits
     * const { count } = await prisma.trait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraitDeleteManyArgs>(args?: SelectSubset<T, TraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraitUpdateManyArgs>(args: SelectSubset<T, TraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits and returns the data updated in the database.
     * @param {TraitUpdateManyAndReturnArgs} args - Arguments to update many Traits.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TraitUpdateManyAndReturnArgs>(args: SelectSubset<T, TraitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trait.
     * @param {TraitUpsertArgs} args - Arguments to update or create a Trait.
     * @example
     * // Update or create a Trait
     * const trait = await prisma.trait.upsert({
     *   create: {
     *     // ... data to create a Trait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trait we want to update
     *   }
     * })
     */
    upsert<T extends TraitUpsertArgs>(args: SelectSubset<T, TraitUpsertArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitCountArgs} args - Arguments to filter Traits to count.
     * @example
     * // Count the number of Traits
     * const count = await prisma.trait.count({
     *   where: {
     *     // ... the filter for the Traits we want to count
     *   }
     * })
    **/
    count<T extends TraitCountArgs>(
      args?: Subset<T, TraitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraitAggregateArgs>(args: Subset<T, TraitAggregateArgs>): Prisma.PrismaPromise<GetTraitAggregateType<T>>

    /**
     * Group by Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TraitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraitGroupByArgs['orderBy'] }
        : { orderBy?: TraitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trait model
   */
  readonly fields: TraitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Race<T extends Trait$RaceArgs<ExtArgs> = {}>(args?: Subset<T, Trait$RaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    races<T extends Trait$racesArgs<ExtArgs> = {}>(args?: Subset<T, Trait$racesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trait model
   */
  interface TraitFieldRefs {
    readonly id: FieldRef<"Trait", 'BigInt'>
    readonly name: FieldRef<"Trait", 'String'>
    readonly description: FieldRef<"Trait", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trait findUnique
   */
  export type TraitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait findUniqueOrThrow
   */
  export type TraitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait findFirst
   */
  export type TraitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait findFirstOrThrow
   */
  export type TraitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait findMany
   */
  export type TraitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Traits to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait create
   */
  export type TraitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The data needed to create a Trait.
     */
    data: XOR<TraitCreateInput, TraitUncheckedCreateInput>
  }

  /**
   * Trait createMany
   */
  export type TraitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Traits.
     */
    data: TraitCreateManyInput | TraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trait createManyAndReturn
   */
  export type TraitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * The data used to create many Traits.
     */
    data: TraitCreateManyInput | TraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trait update
   */
  export type TraitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The data needed to update a Trait.
     */
    data: XOR<TraitUpdateInput, TraitUncheckedUpdateInput>
    /**
     * Choose, which Trait to update.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait updateMany
   */
  export type TraitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Traits.
     */
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyInput>
    /**
     * Filter which Traits to update
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to update.
     */
    limit?: number
  }

  /**
   * Trait updateManyAndReturn
   */
  export type TraitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * The data used to update Traits.
     */
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyInput>
    /**
     * Filter which Traits to update
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to update.
     */
    limit?: number
  }

  /**
   * Trait upsert
   */
  export type TraitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The filter to search for the Trait to update in case it exists.
     */
    where: TraitWhereUniqueInput
    /**
     * In case the Trait found by the `where` argument doesn't exist, create a new Trait with this data.
     */
    create: XOR<TraitCreateInput, TraitUncheckedCreateInput>
    /**
     * In case the Trait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraitUpdateInput, TraitUncheckedUpdateInput>
  }

  /**
   * Trait delete
   */
  export type TraitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter which Trait to delete.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait deleteMany
   */
  export type TraitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Traits to delete
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to delete.
     */
    limit?: number
  }

  /**
   * Trait.Race
   */
  export type Trait$RaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Trait.races
   */
  export type Trait$racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    where?: RaceTraitWhereInput
    orderBy?: RaceTraitOrderByWithRelationInput | RaceTraitOrderByWithRelationInput[]
    cursor?: RaceTraitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceTraitScalarFieldEnum | RaceTraitScalarFieldEnum[]
  }

  /**
   * Trait without action
   */
  export type TraitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
  }


  /**
   * Model RaceTrait
   */

  export type AggregateRaceTrait = {
    _count: RaceTraitCountAggregateOutputType | null
    _avg: RaceTraitAvgAggregateOutputType | null
    _sum: RaceTraitSumAggregateOutputType | null
    _min: RaceTraitMinAggregateOutputType | null
    _max: RaceTraitMaxAggregateOutputType | null
  }

  export type RaceTraitAvgAggregateOutputType = {
    id: number | null
    raceId: number | null
    traitId: number | null
  }

  export type RaceTraitSumAggregateOutputType = {
    id: number | null
    raceId: bigint | null
    traitId: bigint | null
  }

  export type RaceTraitMinAggregateOutputType = {
    id: number | null
    raceId: bigint | null
    traitId: bigint | null
  }

  export type RaceTraitMaxAggregateOutputType = {
    id: number | null
    raceId: bigint | null
    traitId: bigint | null
  }

  export type RaceTraitCountAggregateOutputType = {
    id: number
    raceId: number
    traitId: number
    _all: number
  }


  export type RaceTraitAvgAggregateInputType = {
    id?: true
    raceId?: true
    traitId?: true
  }

  export type RaceTraitSumAggregateInputType = {
    id?: true
    raceId?: true
    traitId?: true
  }

  export type RaceTraitMinAggregateInputType = {
    id?: true
    raceId?: true
    traitId?: true
  }

  export type RaceTraitMaxAggregateInputType = {
    id?: true
    raceId?: true
    traitId?: true
  }

  export type RaceTraitCountAggregateInputType = {
    id?: true
    raceId?: true
    traitId?: true
    _all?: true
  }

  export type RaceTraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceTrait to aggregate.
     */
    where?: RaceTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTraits to fetch.
     */
    orderBy?: RaceTraitOrderByWithRelationInput | RaceTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceTraits
    **/
    _count?: true | RaceTraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceTraitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceTraitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceTraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceTraitMaxAggregateInputType
  }

  export type GetRaceTraitAggregateType<T extends RaceTraitAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceTrait[P]>
      : GetScalarType<T[P], AggregateRaceTrait[P]>
  }




  export type RaceTraitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceTraitWhereInput
    orderBy?: RaceTraitOrderByWithAggregationInput | RaceTraitOrderByWithAggregationInput[]
    by: RaceTraitScalarFieldEnum[] | RaceTraitScalarFieldEnum
    having?: RaceTraitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceTraitCountAggregateInputType | true
    _avg?: RaceTraitAvgAggregateInputType
    _sum?: RaceTraitSumAggregateInputType
    _min?: RaceTraitMinAggregateInputType
    _max?: RaceTraitMaxAggregateInputType
  }

  export type RaceTraitGroupByOutputType = {
    id: number
    raceId: bigint
    traitId: bigint
    _count: RaceTraitCountAggregateOutputType | null
    _avg: RaceTraitAvgAggregateOutputType | null
    _sum: RaceTraitSumAggregateOutputType | null
    _min: RaceTraitMinAggregateOutputType | null
    _max: RaceTraitMaxAggregateOutputType | null
  }

  type GetRaceTraitGroupByPayload<T extends RaceTraitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceTraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceTraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceTraitGroupByOutputType[P]>
            : GetScalarType<T[P], RaceTraitGroupByOutputType[P]>
        }
      >
    >


  export type RaceTraitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    traitId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    trait?: boolean | TraitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceTrait"]>

  export type RaceTraitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    traitId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    trait?: boolean | TraitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceTrait"]>

  export type RaceTraitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    traitId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    trait?: boolean | TraitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceTrait"]>

  export type RaceTraitSelectScalar = {
    id?: boolean
    raceId?: boolean
    traitId?: boolean
  }

  export type RaceTraitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "traitId", ExtArgs["result"]["raceTrait"]>
  export type RaceTraitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    trait?: boolean | TraitDefaultArgs<ExtArgs>
  }
  export type RaceTraitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    trait?: boolean | TraitDefaultArgs<ExtArgs>
  }
  export type RaceTraitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    trait?: boolean | TraitDefaultArgs<ExtArgs>
  }

  export type $RaceTraitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceTrait"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      trait: Prisma.$TraitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      raceId: bigint
      traitId: bigint
    }, ExtArgs["result"]["raceTrait"]>
    composites: {}
  }

  type RaceTraitGetPayload<S extends boolean | null | undefined | RaceTraitDefaultArgs> = $Result.GetResult<Prisma.$RaceTraitPayload, S>

  type RaceTraitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceTraitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceTraitCountAggregateInputType | true
    }

  export interface RaceTraitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceTrait'], meta: { name: 'RaceTrait' } }
    /**
     * Find zero or one RaceTrait that matches the filter.
     * @param {RaceTraitFindUniqueArgs} args - Arguments to find a RaceTrait
     * @example
     * // Get one RaceTrait
     * const raceTrait = await prisma.raceTrait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceTraitFindUniqueArgs>(args: SelectSubset<T, RaceTraitFindUniqueArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceTrait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceTraitFindUniqueOrThrowArgs} args - Arguments to find a RaceTrait
     * @example
     * // Get one RaceTrait
     * const raceTrait = await prisma.raceTrait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceTraitFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceTraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceTrait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitFindFirstArgs} args - Arguments to find a RaceTrait
     * @example
     * // Get one RaceTrait
     * const raceTrait = await prisma.raceTrait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceTraitFindFirstArgs>(args?: SelectSubset<T, RaceTraitFindFirstArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceTrait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitFindFirstOrThrowArgs} args - Arguments to find a RaceTrait
     * @example
     * // Get one RaceTrait
     * const raceTrait = await prisma.raceTrait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceTraitFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceTraitFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceTraits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceTraits
     * const raceTraits = await prisma.raceTrait.findMany()
     * 
     * // Get first 10 RaceTraits
     * const raceTraits = await prisma.raceTrait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceTraitWithIdOnly = await prisma.raceTrait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceTraitFindManyArgs>(args?: SelectSubset<T, RaceTraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceTrait.
     * @param {RaceTraitCreateArgs} args - Arguments to create a RaceTrait.
     * @example
     * // Create one RaceTrait
     * const RaceTrait = await prisma.raceTrait.create({
     *   data: {
     *     // ... data to create a RaceTrait
     *   }
     * })
     * 
     */
    create<T extends RaceTraitCreateArgs>(args: SelectSubset<T, RaceTraitCreateArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceTraits.
     * @param {RaceTraitCreateManyArgs} args - Arguments to create many RaceTraits.
     * @example
     * // Create many RaceTraits
     * const raceTrait = await prisma.raceTrait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceTraitCreateManyArgs>(args?: SelectSubset<T, RaceTraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceTraits and returns the data saved in the database.
     * @param {RaceTraitCreateManyAndReturnArgs} args - Arguments to create many RaceTraits.
     * @example
     * // Create many RaceTraits
     * const raceTrait = await prisma.raceTrait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceTraits and only return the `id`
     * const raceTraitWithIdOnly = await prisma.raceTrait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceTraitCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceTraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceTrait.
     * @param {RaceTraitDeleteArgs} args - Arguments to delete one RaceTrait.
     * @example
     * // Delete one RaceTrait
     * const RaceTrait = await prisma.raceTrait.delete({
     *   where: {
     *     // ... filter to delete one RaceTrait
     *   }
     * })
     * 
     */
    delete<T extends RaceTraitDeleteArgs>(args: SelectSubset<T, RaceTraitDeleteArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceTrait.
     * @param {RaceTraitUpdateArgs} args - Arguments to update one RaceTrait.
     * @example
     * // Update one RaceTrait
     * const raceTrait = await prisma.raceTrait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceTraitUpdateArgs>(args: SelectSubset<T, RaceTraitUpdateArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceTraits.
     * @param {RaceTraitDeleteManyArgs} args - Arguments to filter RaceTraits to delete.
     * @example
     * // Delete a few RaceTraits
     * const { count } = await prisma.raceTrait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceTraitDeleteManyArgs>(args?: SelectSubset<T, RaceTraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceTraits
     * const raceTrait = await prisma.raceTrait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceTraitUpdateManyArgs>(args: SelectSubset<T, RaceTraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceTraits and returns the data updated in the database.
     * @param {RaceTraitUpdateManyAndReturnArgs} args - Arguments to update many RaceTraits.
     * @example
     * // Update many RaceTraits
     * const raceTrait = await prisma.raceTrait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceTraits and only return the `id`
     * const raceTraitWithIdOnly = await prisma.raceTrait.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceTraitUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceTraitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceTrait.
     * @param {RaceTraitUpsertArgs} args - Arguments to update or create a RaceTrait.
     * @example
     * // Update or create a RaceTrait
     * const raceTrait = await prisma.raceTrait.upsert({
     *   create: {
     *     // ... data to create a RaceTrait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceTrait we want to update
     *   }
     * })
     */
    upsert<T extends RaceTraitUpsertArgs>(args: SelectSubset<T, RaceTraitUpsertArgs<ExtArgs>>): Prisma__RaceTraitClient<$Result.GetResult<Prisma.$RaceTraitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitCountArgs} args - Arguments to filter RaceTraits to count.
     * @example
     * // Count the number of RaceTraits
     * const count = await prisma.raceTrait.count({
     *   where: {
     *     // ... the filter for the RaceTraits we want to count
     *   }
     * })
    **/
    count<T extends RaceTraitCountArgs>(
      args?: Subset<T, RaceTraitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceTraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceTraitAggregateArgs>(args: Subset<T, RaceTraitAggregateArgs>): Prisma.PrismaPromise<GetRaceTraitAggregateType<T>>

    /**
     * Group by RaceTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTraitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceTraitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceTraitGroupByArgs['orderBy'] }
        : { orderBy?: RaceTraitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceTraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceTrait model
   */
  readonly fields: RaceTraitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceTrait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceTraitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trait<T extends TraitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TraitDefaultArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceTrait model
   */
  interface RaceTraitFieldRefs {
    readonly id: FieldRef<"RaceTrait", 'Int'>
    readonly raceId: FieldRef<"RaceTrait", 'BigInt'>
    readonly traitId: FieldRef<"RaceTrait", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * RaceTrait findUnique
   */
  export type RaceTraitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * Filter, which RaceTrait to fetch.
     */
    where: RaceTraitWhereUniqueInput
  }

  /**
   * RaceTrait findUniqueOrThrow
   */
  export type RaceTraitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * Filter, which RaceTrait to fetch.
     */
    where: RaceTraitWhereUniqueInput
  }

  /**
   * RaceTrait findFirst
   */
  export type RaceTraitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * Filter, which RaceTrait to fetch.
     */
    where?: RaceTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTraits to fetch.
     */
    orderBy?: RaceTraitOrderByWithRelationInput | RaceTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceTraits.
     */
    cursor?: RaceTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceTraits.
     */
    distinct?: RaceTraitScalarFieldEnum | RaceTraitScalarFieldEnum[]
  }

  /**
   * RaceTrait findFirstOrThrow
   */
  export type RaceTraitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * Filter, which RaceTrait to fetch.
     */
    where?: RaceTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTraits to fetch.
     */
    orderBy?: RaceTraitOrderByWithRelationInput | RaceTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceTraits.
     */
    cursor?: RaceTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceTraits.
     */
    distinct?: RaceTraitScalarFieldEnum | RaceTraitScalarFieldEnum[]
  }

  /**
   * RaceTrait findMany
   */
  export type RaceTraitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * Filter, which RaceTraits to fetch.
     */
    where?: RaceTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTraits to fetch.
     */
    orderBy?: RaceTraitOrderByWithRelationInput | RaceTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceTraits.
     */
    cursor?: RaceTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTraits.
     */
    skip?: number
    distinct?: RaceTraitScalarFieldEnum | RaceTraitScalarFieldEnum[]
  }

  /**
   * RaceTrait create
   */
  export type RaceTraitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceTrait.
     */
    data: XOR<RaceTraitCreateInput, RaceTraitUncheckedCreateInput>
  }

  /**
   * RaceTrait createMany
   */
  export type RaceTraitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceTraits.
     */
    data: RaceTraitCreateManyInput | RaceTraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceTrait createManyAndReturn
   */
  export type RaceTraitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * The data used to create many RaceTraits.
     */
    data: RaceTraitCreateManyInput | RaceTraitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceTrait update
   */
  export type RaceTraitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceTrait.
     */
    data: XOR<RaceTraitUpdateInput, RaceTraitUncheckedUpdateInput>
    /**
     * Choose, which RaceTrait to update.
     */
    where: RaceTraitWhereUniqueInput
  }

  /**
   * RaceTrait updateMany
   */
  export type RaceTraitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceTraits.
     */
    data: XOR<RaceTraitUpdateManyMutationInput, RaceTraitUncheckedUpdateManyInput>
    /**
     * Filter which RaceTraits to update
     */
    where?: RaceTraitWhereInput
    /**
     * Limit how many RaceTraits to update.
     */
    limit?: number
  }

  /**
   * RaceTrait updateManyAndReturn
   */
  export type RaceTraitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * The data used to update RaceTraits.
     */
    data: XOR<RaceTraitUpdateManyMutationInput, RaceTraitUncheckedUpdateManyInput>
    /**
     * Filter which RaceTraits to update
     */
    where?: RaceTraitWhereInput
    /**
     * Limit how many RaceTraits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceTrait upsert
   */
  export type RaceTraitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceTrait to update in case it exists.
     */
    where: RaceTraitWhereUniqueInput
    /**
     * In case the RaceTrait found by the `where` argument doesn't exist, create a new RaceTrait with this data.
     */
    create: XOR<RaceTraitCreateInput, RaceTraitUncheckedCreateInput>
    /**
     * In case the RaceTrait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceTraitUpdateInput, RaceTraitUncheckedUpdateInput>
  }

  /**
   * RaceTrait delete
   */
  export type RaceTraitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
    /**
     * Filter which RaceTrait to delete.
     */
    where: RaceTraitWhereUniqueInput
  }

  /**
   * RaceTrait deleteMany
   */
  export type RaceTraitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceTraits to delete
     */
    where?: RaceTraitWhereInput
    /**
     * Limit how many RaceTraits to delete.
     */
    limit?: number
  }

  /**
   * RaceTrait without action
   */
  export type RaceTraitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTrait
     */
    select?: RaceTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTrait
     */
    omit?: RaceTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTraitInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: bigint | null
  }

  export type ClassMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    caster_type: string | null
    subclass: string | null
    hit_dice: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    caster_type: string | null
    subclass: string | null
    hit_dice: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    caster_type: number
    subclass: number
    hit_dice: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    caster_type?: true
    subclass?: true
    hit_dice?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    caster_type?: true
    subclass?: true
    hit_dice?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    caster_type?: true
    subclass?: true
    hit_dice?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: bigint
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caster_type?: boolean
    subclass?: boolean
    hit_dice?: boolean
    savingThrows?: boolean | Class$savingThrowsArgs<ExtArgs>
    Character?: boolean | Class$CharacterArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caster_type?: boolean
    subclass?: boolean
    hit_dice?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caster_type?: boolean
    subclass?: boolean
    hit_dice?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    caster_type?: boolean
    subclass?: boolean
    hit_dice?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "caster_type" | "subclass" | "hit_dice", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savingThrows?: boolean | Class$savingThrowsArgs<ExtArgs>
    Character?: boolean | Class$CharacterArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      savingThrows: Prisma.$AbilityPayload<ExtArgs>[]
      Character: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      caster_type: string
      subclass: string
      hit_dice: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savingThrows<T extends Class$savingThrowsArgs<ExtArgs> = {}>(args?: Subset<T, Class$savingThrowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Character<T extends Class$CharacterArgs<ExtArgs> = {}>(args?: Subset<T, Class$CharacterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'BigInt'>
    readonly name: FieldRef<"Class", 'String'>
    readonly caster_type: FieldRef<"Class", 'String'>
    readonly subclass: FieldRef<"Class", 'String'>
    readonly hit_dice: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.savingThrows
   */
  export type Class$savingThrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    cursor?: AbilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Class.Character
   */
  export type Class$CharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Ability
   */

  export type AggregateAbility = {
    _count: AbilityCountAggregateOutputType | null
    _avg: AbilityAvgAggregateOutputType | null
    _sum: AbilitySumAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  export type AbilityAvgAggregateOutputType = {
    id: number | null
    skillid: number | null
  }

  export type AbilitySumAggregateOutputType = {
    id: bigint | null
    skillid: bigint | null
  }

  export type AbilityMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    short_desc: string | null
    skillid: bigint | null
  }

  export type AbilityMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    short_desc: string | null
    skillid: bigint | null
  }

  export type AbilityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    short_desc: number
    skillid: number
    _all: number
  }


  export type AbilityAvgAggregateInputType = {
    id?: true
    skillid?: true
  }

  export type AbilitySumAggregateInputType = {
    id?: true
    skillid?: true
  }

  export type AbilityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    short_desc?: true
    skillid?: true
  }

  export type AbilityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    short_desc?: true
    skillid?: true
  }

  export type AbilityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    short_desc?: true
    skillid?: true
    _all?: true
  }

  export type AbilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ability to aggregate.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abilities
    **/
    _count?: true | AbilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilityMaxAggregateInputType
  }

  export type GetAbilityAggregateType<T extends AbilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAbility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbility[P]>
      : GetScalarType<T[P], AggregateAbility[P]>
  }




  export type AbilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithAggregationInput | AbilityOrderByWithAggregationInput[]
    by: AbilityScalarFieldEnum[] | AbilityScalarFieldEnum
    having?: AbilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilityCountAggregateInputType | true
    _avg?: AbilityAvgAggregateInputType
    _sum?: AbilitySumAggregateInputType
    _min?: AbilityMinAggregateInputType
    _max?: AbilityMaxAggregateInputType
  }

  export type AbilityGroupByOutputType = {
    id: bigint
    name: string
    description: string
    short_desc: string
    skillid: bigint | null
    _count: AbilityCountAggregateOutputType | null
    _avg: AbilityAvgAggregateOutputType | null
    _sum: AbilitySumAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  type GetAbilityGroupByPayload<T extends AbilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilityGroupByOutputType[P]>
            : GetScalarType<T[P], AbilityGroupByOutputType[P]>
        }
      >
    >


  export type AbilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    short_desc?: boolean
    skillid?: boolean
    skill?: boolean | Ability$skillArgs<ExtArgs>
    class?: boolean | Ability$classArgs<ExtArgs>
    CharacterAbility?: boolean | Ability$CharacterAbilityArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    short_desc?: boolean
    skillid?: boolean
    skill?: boolean | Ability$skillArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    short_desc?: boolean
    skillid?: boolean
    skill?: boolean | Ability$skillArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    short_desc?: boolean
    skillid?: boolean
  }

  export type AbilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "short_desc" | "skillid", ExtArgs["result"]["ability"]>
  export type AbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | Ability$skillArgs<ExtArgs>
    class?: boolean | Ability$classArgs<ExtArgs>
    CharacterAbility?: boolean | Ability$CharacterAbilityArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AbilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | Ability$skillArgs<ExtArgs>
  }
  export type AbilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | Ability$skillArgs<ExtArgs>
  }

  export type $AbilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ability"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs> | null
      class: Prisma.$ClassPayload<ExtArgs>[]
      CharacterAbility: Prisma.$CharacterAbilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      short_desc: string
      skillid: bigint | null
    }, ExtArgs["result"]["ability"]>
    composites: {}
  }

  type AbilityGetPayload<S extends boolean | null | undefined | AbilityDefaultArgs> = $Result.GetResult<Prisma.$AbilityPayload, S>

  type AbilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbilityCountAggregateInputType | true
    }

  export interface AbilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ability'], meta: { name: 'Ability' } }
    /**
     * Find zero or one Ability that matches the filter.
     * @param {AbilityFindUniqueArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbilityFindUniqueArgs>(args: SelectSubset<T, AbilityFindUniqueArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbilityFindUniqueOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AbilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbilityFindFirstArgs>(args?: SelectSubset<T, AbilityFindFirstArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AbilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abilities
     * const abilities = await prisma.ability.findMany()
     * 
     * // Get first 10 Abilities
     * const abilities = await prisma.ability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abilityWithIdOnly = await prisma.ability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbilityFindManyArgs>(args?: SelectSubset<T, AbilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ability.
     * @param {AbilityCreateArgs} args - Arguments to create a Ability.
     * @example
     * // Create one Ability
     * const Ability = await prisma.ability.create({
     *   data: {
     *     // ... data to create a Ability
     *   }
     * })
     * 
     */
    create<T extends AbilityCreateArgs>(args: SelectSubset<T, AbilityCreateArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abilities.
     * @param {AbilityCreateManyArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const ability = await prisma.ability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbilityCreateManyArgs>(args?: SelectSubset<T, AbilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abilities and returns the data saved in the database.
     * @param {AbilityCreateManyAndReturnArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const ability = await prisma.ability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abilities and only return the `id`
     * const abilityWithIdOnly = await prisma.ability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AbilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ability.
     * @param {AbilityDeleteArgs} args - Arguments to delete one Ability.
     * @example
     * // Delete one Ability
     * const Ability = await prisma.ability.delete({
     *   where: {
     *     // ... filter to delete one Ability
     *   }
     * })
     * 
     */
    delete<T extends AbilityDeleteArgs>(args: SelectSubset<T, AbilityDeleteArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ability.
     * @param {AbilityUpdateArgs} args - Arguments to update one Ability.
     * @example
     * // Update one Ability
     * const ability = await prisma.ability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbilityUpdateArgs>(args: SelectSubset<T, AbilityUpdateArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abilities.
     * @param {AbilityDeleteManyArgs} args - Arguments to filter Abilities to delete.
     * @example
     * // Delete a few Abilities
     * const { count } = await prisma.ability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbilityDeleteManyArgs>(args?: SelectSubset<T, AbilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbilityUpdateManyArgs>(args: SelectSubset<T, AbilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities and returns the data updated in the database.
     * @param {AbilityUpdateManyAndReturnArgs} args - Arguments to update many Abilities.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abilities and only return the `id`
     * const abilityWithIdOnly = await prisma.ability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AbilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ability.
     * @param {AbilityUpsertArgs} args - Arguments to update or create a Ability.
     * @example
     * // Update or create a Ability
     * const ability = await prisma.ability.upsert({
     *   create: {
     *     // ... data to create a Ability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ability we want to update
     *   }
     * })
     */
    upsert<T extends AbilityUpsertArgs>(args: SelectSubset<T, AbilityUpsertArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityCountArgs} args - Arguments to filter Abilities to count.
     * @example
     * // Count the number of Abilities
     * const count = await prisma.ability.count({
     *   where: {
     *     // ... the filter for the Abilities we want to count
     *   }
     * })
    **/
    count<T extends AbilityCountArgs>(
      args?: Subset<T, AbilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbilityAggregateArgs>(args: Subset<T, AbilityAggregateArgs>): Prisma.PrismaPromise<GetAbilityAggregateType<T>>

    /**
     * Group by Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilityGroupByArgs['orderBy'] }
        : { orderBy?: AbilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ability model
   */
  readonly fields: AbilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends Ability$skillArgs<ExtArgs> = {}>(args?: Subset<T, Ability$skillArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    class<T extends Ability$classArgs<ExtArgs> = {}>(args?: Subset<T, Ability$classArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CharacterAbility<T extends Ability$CharacterAbilityArgs<ExtArgs> = {}>(args?: Subset<T, Ability$CharacterAbilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ability model
   */
  interface AbilityFieldRefs {
    readonly id: FieldRef<"Ability", 'BigInt'>
    readonly name: FieldRef<"Ability", 'String'>
    readonly description: FieldRef<"Ability", 'String'>
    readonly short_desc: FieldRef<"Ability", 'String'>
    readonly skillid: FieldRef<"Ability", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Ability findUnique
   */
  export type AbilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability findUniqueOrThrow
   */
  export type AbilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability findFirst
   */
  export type AbilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability findFirstOrThrow
   */
  export type AbilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability findMany
   */
  export type AbilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability create
   */
  export type AbilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Ability.
     */
    data: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
  }

  /**
   * Ability createMany
   */
  export type AbilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ability createManyAndReturn
   */
  export type AbilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ability update
   */
  export type AbilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Ability.
     */
    data: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
    /**
     * Choose, which Ability to update.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability updateMany
   */
  export type AbilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to update.
     */
    limit?: number
  }

  /**
   * Ability updateManyAndReturn
   */
  export type AbilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ability upsert
   */
  export type AbilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Ability to update in case it exists.
     */
    where: AbilityWhereUniqueInput
    /**
     * In case the Ability found by the `where` argument doesn't exist, create a new Ability with this data.
     */
    create: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
    /**
     * In case the Ability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
  }

  /**
   * Ability delete
   */
  export type AbilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter which Ability to delete.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability deleteMany
   */
  export type AbilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abilities to delete
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to delete.
     */
    limit?: number
  }

  /**
   * Ability.skill
   */
  export type Ability$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
  }

  /**
   * Ability.class
   */
  export type Ability$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Ability.CharacterAbility
   */
  export type Ability$CharacterAbilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    where?: CharacterAbilityWhereInput
    orderBy?: CharacterAbilityOrderByWithRelationInput | CharacterAbilityOrderByWithRelationInput[]
    cursor?: CharacterAbilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterAbilityScalarFieldEnum | CharacterAbilityScalarFieldEnum[]
  }

  /**
   * Ability without action
   */
  export type AbilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: bigint | null
  }

  export type SkillMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: bigint
    name: string
    description: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ability?: boolean | Skill$abilityArgs<ExtArgs>
    playerSkill?: boolean | Skill$playerSkillArgs<ExtArgs>
    Background_Skill?: boolean | Skill$Background_SkillArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | Skill$abilityArgs<ExtArgs>
    playerSkill?: boolean | Skill$playerSkillArgs<ExtArgs>
    Background_Skill?: boolean | Skill$Background_SkillArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      ability: Prisma.$AbilityPayload<ExtArgs>[]
      playerSkill: Prisma.$PlayerSkillPayload<ExtArgs>[]
      Background_Skill: Prisma.$Background_SkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ability<T extends Skill$abilityArgs<ExtArgs> = {}>(args?: Subset<T, Skill$abilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerSkill<T extends Skill$playerSkillArgs<ExtArgs> = {}>(args?: Subset<T, Skill$playerSkillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Background_Skill<T extends Skill$Background_SkillArgs<ExtArgs> = {}>(args?: Subset<T, Skill$Background_SkillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'BigInt'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.ability
   */
  export type Skill$abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    cursor?: AbilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Skill.playerSkill
   */
  export type Skill$playerSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    where?: PlayerSkillWhereInput
    orderBy?: PlayerSkillOrderByWithRelationInput | PlayerSkillOrderByWithRelationInput[]
    cursor?: PlayerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerSkillScalarFieldEnum | PlayerSkillScalarFieldEnum[]
  }

  /**
   * Skill.Background_Skill
   */
  export type Skill$Background_SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    where?: Background_SkillWhereInput
    orderBy?: Background_SkillOrderByWithRelationInput | Background_SkillOrderByWithRelationInput[]
    cursor?: Background_SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Background_SkillScalarFieldEnum | Background_SkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Background
   */

  export type AggregateBackground = {
    _count: BackgroundCountAggregateOutputType | null
    _avg: BackgroundAvgAggregateOutputType | null
    _sum: BackgroundSumAggregateOutputType | null
    _min: BackgroundMinAggregateOutputType | null
    _max: BackgroundMaxAggregateOutputType | null
  }

  export type BackgroundAvgAggregateOutputType = {
    id: number | null
  }

  export type BackgroundSumAggregateOutputType = {
    id: bigint | null
  }

  export type BackgroundMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type BackgroundMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type BackgroundCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type BackgroundAvgAggregateInputType = {
    id?: true
  }

  export type BackgroundSumAggregateInputType = {
    id?: true
  }

  export type BackgroundMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type BackgroundMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type BackgroundCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type BackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background to aggregate.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Backgrounds
    **/
    _count?: true | BackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackgroundMaxAggregateInputType
  }

  export type GetBackgroundAggregateType<T extends BackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackground[P]>
      : GetScalarType<T[P], AggregateBackground[P]>
  }




  export type BackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackgroundWhereInput
    orderBy?: BackgroundOrderByWithAggregationInput | BackgroundOrderByWithAggregationInput[]
    by: BackgroundScalarFieldEnum[] | BackgroundScalarFieldEnum
    having?: BackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackgroundCountAggregateInputType | true
    _avg?: BackgroundAvgAggregateInputType
    _sum?: BackgroundSumAggregateInputType
    _min?: BackgroundMinAggregateInputType
    _max?: BackgroundMaxAggregateInputType
  }

  export type BackgroundGroupByOutputType = {
    id: bigint
    name: string
    description: string
    _count: BackgroundCountAggregateOutputType | null
    _avg: BackgroundAvgAggregateOutputType | null
    _sum: BackgroundSumAggregateOutputType | null
    _min: BackgroundMinAggregateOutputType | null
    _max: BackgroundMaxAggregateOutputType | null
  }

  type GetBackgroundGroupByPayload<T extends BackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], BackgroundGroupByOutputType[P]>
        }
      >
    >


  export type BackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    character?: boolean | Background$characterArgs<ExtArgs>
    skills?: boolean | Background$skillsArgs<ExtArgs>
    _count?: boolean | BackgroundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["background"]>

  export type BackgroundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["background"]>

  export type BackgroundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["background"]>

  export type BackgroundSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type BackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["background"]>
  export type BackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | Background$characterArgs<ExtArgs>
    skills?: boolean | Background$skillsArgs<ExtArgs>
    _count?: boolean | BackgroundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BackgroundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BackgroundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Background"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs> | null
      skills: Prisma.$Background_SkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
    }, ExtArgs["result"]["background"]>
    composites: {}
  }

  type BackgroundGetPayload<S extends boolean | null | undefined | BackgroundDefaultArgs> = $Result.GetResult<Prisma.$BackgroundPayload, S>

  type BackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackgroundCountAggregateInputType | true
    }

  export interface BackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Background'], meta: { name: 'Background' } }
    /**
     * Find zero or one Background that matches the filter.
     * @param {BackgroundFindUniqueArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackgroundFindUniqueArgs>(args: SelectSubset<T, BackgroundFindUniqueArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Background that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackgroundFindUniqueOrThrowArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, BackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindFirstArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackgroundFindFirstArgs>(args?: SelectSubset<T, BackgroundFindFirstArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindFirstOrThrowArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, BackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Backgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backgrounds
     * const backgrounds = await prisma.background.findMany()
     * 
     * // Get first 10 Backgrounds
     * const backgrounds = await prisma.background.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backgroundWithIdOnly = await prisma.background.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackgroundFindManyArgs>(args?: SelectSubset<T, BackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Background.
     * @param {BackgroundCreateArgs} args - Arguments to create a Background.
     * @example
     * // Create one Background
     * const Background = await prisma.background.create({
     *   data: {
     *     // ... data to create a Background
     *   }
     * })
     * 
     */
    create<T extends BackgroundCreateArgs>(args: SelectSubset<T, BackgroundCreateArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Backgrounds.
     * @param {BackgroundCreateManyArgs} args - Arguments to create many Backgrounds.
     * @example
     * // Create many Backgrounds
     * const background = await prisma.background.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackgroundCreateManyArgs>(args?: SelectSubset<T, BackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Backgrounds and returns the data saved in the database.
     * @param {BackgroundCreateManyAndReturnArgs} args - Arguments to create many Backgrounds.
     * @example
     * // Create many Backgrounds
     * const background = await prisma.background.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Backgrounds and only return the `id`
     * const backgroundWithIdOnly = await prisma.background.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackgroundCreateManyAndReturnArgs>(args?: SelectSubset<T, BackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Background.
     * @param {BackgroundDeleteArgs} args - Arguments to delete one Background.
     * @example
     * // Delete one Background
     * const Background = await prisma.background.delete({
     *   where: {
     *     // ... filter to delete one Background
     *   }
     * })
     * 
     */
    delete<T extends BackgroundDeleteArgs>(args: SelectSubset<T, BackgroundDeleteArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Background.
     * @param {BackgroundUpdateArgs} args - Arguments to update one Background.
     * @example
     * // Update one Background
     * const background = await prisma.background.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackgroundUpdateArgs>(args: SelectSubset<T, BackgroundUpdateArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Backgrounds.
     * @param {BackgroundDeleteManyArgs} args - Arguments to filter Backgrounds to delete.
     * @example
     * // Delete a few Backgrounds
     * const { count } = await prisma.background.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackgroundDeleteManyArgs>(args?: SelectSubset<T, BackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backgrounds
     * const background = await prisma.background.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackgroundUpdateManyArgs>(args: SelectSubset<T, BackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backgrounds and returns the data updated in the database.
     * @param {BackgroundUpdateManyAndReturnArgs} args - Arguments to update many Backgrounds.
     * @example
     * // Update many Backgrounds
     * const background = await prisma.background.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Backgrounds and only return the `id`
     * const backgroundWithIdOnly = await prisma.background.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BackgroundUpdateManyAndReturnArgs>(args: SelectSubset<T, BackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Background.
     * @param {BackgroundUpsertArgs} args - Arguments to update or create a Background.
     * @example
     * // Update or create a Background
     * const background = await prisma.background.upsert({
     *   create: {
     *     // ... data to create a Background
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Background we want to update
     *   }
     * })
     */
    upsert<T extends BackgroundUpsertArgs>(args: SelectSubset<T, BackgroundUpsertArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Backgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundCountArgs} args - Arguments to filter Backgrounds to count.
     * @example
     * // Count the number of Backgrounds
     * const count = await prisma.background.count({
     *   where: {
     *     // ... the filter for the Backgrounds we want to count
     *   }
     * })
    **/
    count<T extends BackgroundCountArgs>(
      args?: Subset<T, BackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Background.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BackgroundAggregateArgs>(args: Subset<T, BackgroundAggregateArgs>): Prisma.PrismaPromise<GetBackgroundAggregateType<T>>

    /**
     * Group by Background.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackgroundGroupByArgs['orderBy'] }
        : { orderBy?: BackgroundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Background model
   */
  readonly fields: BackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Background.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends Background$characterArgs<ExtArgs> = {}>(args?: Subset<T, Background$characterArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skills<T extends Background$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Background$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Background model
   */
  interface BackgroundFieldRefs {
    readonly id: FieldRef<"Background", 'BigInt'>
    readonly name: FieldRef<"Background", 'String'>
    readonly description: FieldRef<"Background", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Background findUnique
   */
  export type BackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background findUniqueOrThrow
   */
  export type BackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background findFirst
   */
  export type BackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backgrounds.
     */
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background findFirstOrThrow
   */
  export type BackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backgrounds.
     */
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background findMany
   */
  export type BackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Backgrounds to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background create
   */
  export type BackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a Background.
     */
    data: XOR<BackgroundCreateInput, BackgroundUncheckedCreateInput>
  }

  /**
   * Background createMany
   */
  export type BackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Backgrounds.
     */
    data: BackgroundCreateManyInput | BackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Background createManyAndReturn
   */
  export type BackgroundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The data used to create many Backgrounds.
     */
    data: BackgroundCreateManyInput | BackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Background update
   */
  export type BackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a Background.
     */
    data: XOR<BackgroundUpdateInput, BackgroundUncheckedUpdateInput>
    /**
     * Choose, which Background to update.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background updateMany
   */
  export type BackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Backgrounds.
     */
    data: XOR<BackgroundUpdateManyMutationInput, BackgroundUncheckedUpdateManyInput>
    /**
     * Filter which Backgrounds to update
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to update.
     */
    limit?: number
  }

  /**
   * Background updateManyAndReturn
   */
  export type BackgroundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The data used to update Backgrounds.
     */
    data: XOR<BackgroundUpdateManyMutationInput, BackgroundUncheckedUpdateManyInput>
    /**
     * Filter which Backgrounds to update
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to update.
     */
    limit?: number
  }

  /**
   * Background upsert
   */
  export type BackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the Background to update in case it exists.
     */
    where: BackgroundWhereUniqueInput
    /**
     * In case the Background found by the `where` argument doesn't exist, create a new Background with this data.
     */
    create: XOR<BackgroundCreateInput, BackgroundUncheckedCreateInput>
    /**
     * In case the Background was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackgroundUpdateInput, BackgroundUncheckedUpdateInput>
  }

  /**
   * Background delete
   */
  export type BackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter which Background to delete.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background deleteMany
   */
  export type BackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backgrounds to delete
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to delete.
     */
    limit?: number
  }

  /**
   * Background.character
   */
  export type Background$characterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
  }

  /**
   * Background.skills
   */
  export type Background$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    where?: Background_SkillWhereInput
    orderBy?: Background_SkillOrderByWithRelationInput | Background_SkillOrderByWithRelationInput[]
    cursor?: Background_SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Background_SkillScalarFieldEnum | Background_SkillScalarFieldEnum[]
  }

  /**
   * Background without action
   */
  export type BackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
  }


  /**
   * Model Background_Skill
   */

  export type AggregateBackground_Skill = {
    _count: Background_SkillCountAggregateOutputType | null
    _avg: Background_SkillAvgAggregateOutputType | null
    _sum: Background_SkillSumAggregateOutputType | null
    _min: Background_SkillMinAggregateOutputType | null
    _max: Background_SkillMaxAggregateOutputType | null
  }

  export type Background_SkillAvgAggregateOutputType = {
    id: number | null
    skillId: number | null
    backgroundId: number | null
  }

  export type Background_SkillSumAggregateOutputType = {
    id: bigint | null
    skillId: bigint | null
    backgroundId: bigint | null
  }

  export type Background_SkillMinAggregateOutputType = {
    id: bigint | null
    skillId: bigint | null
    backgroundId: bigint | null
  }

  export type Background_SkillMaxAggregateOutputType = {
    id: bigint | null
    skillId: bigint | null
    backgroundId: bigint | null
  }

  export type Background_SkillCountAggregateOutputType = {
    id: number
    skillId: number
    backgroundId: number
    _all: number
  }


  export type Background_SkillAvgAggregateInputType = {
    id?: true
    skillId?: true
    backgroundId?: true
  }

  export type Background_SkillSumAggregateInputType = {
    id?: true
    skillId?: true
    backgroundId?: true
  }

  export type Background_SkillMinAggregateInputType = {
    id?: true
    skillId?: true
    backgroundId?: true
  }

  export type Background_SkillMaxAggregateInputType = {
    id?: true
    skillId?: true
    backgroundId?: true
  }

  export type Background_SkillCountAggregateInputType = {
    id?: true
    skillId?: true
    backgroundId?: true
    _all?: true
  }

  export type Background_SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background_Skill to aggregate.
     */
    where?: Background_SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Skills to fetch.
     */
    orderBy?: Background_SkillOrderByWithRelationInput | Background_SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Background_SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Background_Skills
    **/
    _count?: true | Background_SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Background_SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Background_SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Background_SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Background_SkillMaxAggregateInputType
  }

  export type GetBackground_SkillAggregateType<T extends Background_SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateBackground_Skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackground_Skill[P]>
      : GetScalarType<T[P], AggregateBackground_Skill[P]>
  }




  export type Background_SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Background_SkillWhereInput
    orderBy?: Background_SkillOrderByWithAggregationInput | Background_SkillOrderByWithAggregationInput[]
    by: Background_SkillScalarFieldEnum[] | Background_SkillScalarFieldEnum
    having?: Background_SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Background_SkillCountAggregateInputType | true
    _avg?: Background_SkillAvgAggregateInputType
    _sum?: Background_SkillSumAggregateInputType
    _min?: Background_SkillMinAggregateInputType
    _max?: Background_SkillMaxAggregateInputType
  }

  export type Background_SkillGroupByOutputType = {
    id: bigint
    skillId: bigint
    backgroundId: bigint
    _count: Background_SkillCountAggregateOutputType | null
    _avg: Background_SkillAvgAggregateOutputType | null
    _sum: Background_SkillSumAggregateOutputType | null
    _min: Background_SkillMinAggregateOutputType | null
    _max: Background_SkillMaxAggregateOutputType | null
  }

  type GetBackground_SkillGroupByPayload<T extends Background_SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Background_SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Background_SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Background_SkillGroupByOutputType[P]>
            : GetScalarType<T[P], Background_SkillGroupByOutputType[P]>
        }
      >
    >


  export type Background_SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    backgroundId?: boolean
    skill_potential?: boolean | SkillDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["background_Skill"]>

  export type Background_SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    backgroundId?: boolean
    skill_potential?: boolean | SkillDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["background_Skill"]>

  export type Background_SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    backgroundId?: boolean
    skill_potential?: boolean | SkillDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["background_Skill"]>

  export type Background_SkillSelectScalar = {
    id?: boolean
    skillId?: boolean
    backgroundId?: boolean
  }

  export type Background_SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillId" | "backgroundId", ExtArgs["result"]["background_Skill"]>
  export type Background_SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_potential?: boolean | SkillDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
  }
  export type Background_SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_potential?: boolean | SkillDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
  }
  export type Background_SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_potential?: boolean | SkillDefaultArgs<ExtArgs>
    background?: boolean | BackgroundDefaultArgs<ExtArgs>
  }

  export type $Background_SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Background_Skill"
    objects: {
      skill_potential: Prisma.$SkillPayload<ExtArgs>
      background: Prisma.$BackgroundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      skillId: bigint
      backgroundId: bigint
    }, ExtArgs["result"]["background_Skill"]>
    composites: {}
  }

  type Background_SkillGetPayload<S extends boolean | null | undefined | Background_SkillDefaultArgs> = $Result.GetResult<Prisma.$Background_SkillPayload, S>

  type Background_SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Background_SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Background_SkillCountAggregateInputType | true
    }

  export interface Background_SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Background_Skill'], meta: { name: 'Background_Skill' } }
    /**
     * Find zero or one Background_Skill that matches the filter.
     * @param {Background_SkillFindUniqueArgs} args - Arguments to find a Background_Skill
     * @example
     * // Get one Background_Skill
     * const background_Skill = await prisma.background_Skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Background_SkillFindUniqueArgs>(args: SelectSubset<T, Background_SkillFindUniqueArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Background_Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Background_SkillFindUniqueOrThrowArgs} args - Arguments to find a Background_Skill
     * @example
     * // Get one Background_Skill
     * const background_Skill = await prisma.background_Skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Background_SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, Background_SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background_Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillFindFirstArgs} args - Arguments to find a Background_Skill
     * @example
     * // Get one Background_Skill
     * const background_Skill = await prisma.background_Skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Background_SkillFindFirstArgs>(args?: SelectSubset<T, Background_SkillFindFirstArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background_Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillFindFirstOrThrowArgs} args - Arguments to find a Background_Skill
     * @example
     * // Get one Background_Skill
     * const background_Skill = await prisma.background_Skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Background_SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, Background_SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Background_Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Background_Skills
     * const background_Skills = await prisma.background_Skill.findMany()
     * 
     * // Get first 10 Background_Skills
     * const background_Skills = await prisma.background_Skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const background_SkillWithIdOnly = await prisma.background_Skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Background_SkillFindManyArgs>(args?: SelectSubset<T, Background_SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Background_Skill.
     * @param {Background_SkillCreateArgs} args - Arguments to create a Background_Skill.
     * @example
     * // Create one Background_Skill
     * const Background_Skill = await prisma.background_Skill.create({
     *   data: {
     *     // ... data to create a Background_Skill
     *   }
     * })
     * 
     */
    create<T extends Background_SkillCreateArgs>(args: SelectSubset<T, Background_SkillCreateArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Background_Skills.
     * @param {Background_SkillCreateManyArgs} args - Arguments to create many Background_Skills.
     * @example
     * // Create many Background_Skills
     * const background_Skill = await prisma.background_Skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Background_SkillCreateManyArgs>(args?: SelectSubset<T, Background_SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Background_Skills and returns the data saved in the database.
     * @param {Background_SkillCreateManyAndReturnArgs} args - Arguments to create many Background_Skills.
     * @example
     * // Create many Background_Skills
     * const background_Skill = await prisma.background_Skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Background_Skills and only return the `id`
     * const background_SkillWithIdOnly = await prisma.background_Skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Background_SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, Background_SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Background_Skill.
     * @param {Background_SkillDeleteArgs} args - Arguments to delete one Background_Skill.
     * @example
     * // Delete one Background_Skill
     * const Background_Skill = await prisma.background_Skill.delete({
     *   where: {
     *     // ... filter to delete one Background_Skill
     *   }
     * })
     * 
     */
    delete<T extends Background_SkillDeleteArgs>(args: SelectSubset<T, Background_SkillDeleteArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Background_Skill.
     * @param {Background_SkillUpdateArgs} args - Arguments to update one Background_Skill.
     * @example
     * // Update one Background_Skill
     * const background_Skill = await prisma.background_Skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Background_SkillUpdateArgs>(args: SelectSubset<T, Background_SkillUpdateArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Background_Skills.
     * @param {Background_SkillDeleteManyArgs} args - Arguments to filter Background_Skills to delete.
     * @example
     * // Delete a few Background_Skills
     * const { count } = await prisma.background_Skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Background_SkillDeleteManyArgs>(args?: SelectSubset<T, Background_SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Background_Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Background_Skills
     * const background_Skill = await prisma.background_Skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Background_SkillUpdateManyArgs>(args: SelectSubset<T, Background_SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Background_Skills and returns the data updated in the database.
     * @param {Background_SkillUpdateManyAndReturnArgs} args - Arguments to update many Background_Skills.
     * @example
     * // Update many Background_Skills
     * const background_Skill = await prisma.background_Skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Background_Skills and only return the `id`
     * const background_SkillWithIdOnly = await prisma.background_Skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Background_SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, Background_SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Background_Skill.
     * @param {Background_SkillUpsertArgs} args - Arguments to update or create a Background_Skill.
     * @example
     * // Update or create a Background_Skill
     * const background_Skill = await prisma.background_Skill.upsert({
     *   create: {
     *     // ... data to create a Background_Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Background_Skill we want to update
     *   }
     * })
     */
    upsert<T extends Background_SkillUpsertArgs>(args: SelectSubset<T, Background_SkillUpsertArgs<ExtArgs>>): Prisma__Background_SkillClient<$Result.GetResult<Prisma.$Background_SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Background_Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillCountArgs} args - Arguments to filter Background_Skills to count.
     * @example
     * // Count the number of Background_Skills
     * const count = await prisma.background_Skill.count({
     *   where: {
     *     // ... the filter for the Background_Skills we want to count
     *   }
     * })
    **/
    count<T extends Background_SkillCountArgs>(
      args?: Subset<T, Background_SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Background_SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Background_Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Background_SkillAggregateArgs>(args: Subset<T, Background_SkillAggregateArgs>): Prisma.PrismaPromise<GetBackground_SkillAggregateType<T>>

    /**
     * Group by Background_Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Background_SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Background_SkillGroupByArgs['orderBy'] }
        : { orderBy?: Background_SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Background_SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackground_SkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Background_Skill model
   */
  readonly fields: Background_SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Background_Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Background_SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill_potential<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    background<T extends BackgroundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BackgroundDefaultArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Background_Skill model
   */
  interface Background_SkillFieldRefs {
    readonly id: FieldRef<"Background_Skill", 'BigInt'>
    readonly skillId: FieldRef<"Background_Skill", 'BigInt'>
    readonly backgroundId: FieldRef<"Background_Skill", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Background_Skill findUnique
   */
  export type Background_SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * Filter, which Background_Skill to fetch.
     */
    where: Background_SkillWhereUniqueInput
  }

  /**
   * Background_Skill findUniqueOrThrow
   */
  export type Background_SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * Filter, which Background_Skill to fetch.
     */
    where: Background_SkillWhereUniqueInput
  }

  /**
   * Background_Skill findFirst
   */
  export type Background_SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * Filter, which Background_Skill to fetch.
     */
    where?: Background_SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Skills to fetch.
     */
    orderBy?: Background_SkillOrderByWithRelationInput | Background_SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Background_Skills.
     */
    cursor?: Background_SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Background_Skills.
     */
    distinct?: Background_SkillScalarFieldEnum | Background_SkillScalarFieldEnum[]
  }

  /**
   * Background_Skill findFirstOrThrow
   */
  export type Background_SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * Filter, which Background_Skill to fetch.
     */
    where?: Background_SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Skills to fetch.
     */
    orderBy?: Background_SkillOrderByWithRelationInput | Background_SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Background_Skills.
     */
    cursor?: Background_SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Background_Skills.
     */
    distinct?: Background_SkillScalarFieldEnum | Background_SkillScalarFieldEnum[]
  }

  /**
   * Background_Skill findMany
   */
  export type Background_SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * Filter, which Background_Skills to fetch.
     */
    where?: Background_SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Skills to fetch.
     */
    orderBy?: Background_SkillOrderByWithRelationInput | Background_SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Background_Skills.
     */
    cursor?: Background_SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Skills.
     */
    skip?: number
    distinct?: Background_SkillScalarFieldEnum | Background_SkillScalarFieldEnum[]
  }

  /**
   * Background_Skill create
   */
  export type Background_SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Background_Skill.
     */
    data: XOR<Background_SkillCreateInput, Background_SkillUncheckedCreateInput>
  }

  /**
   * Background_Skill createMany
   */
  export type Background_SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Background_Skills.
     */
    data: Background_SkillCreateManyInput | Background_SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Background_Skill createManyAndReturn
   */
  export type Background_SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Background_Skills.
     */
    data: Background_SkillCreateManyInput | Background_SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Background_Skill update
   */
  export type Background_SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Background_Skill.
     */
    data: XOR<Background_SkillUpdateInput, Background_SkillUncheckedUpdateInput>
    /**
     * Choose, which Background_Skill to update.
     */
    where: Background_SkillWhereUniqueInput
  }

  /**
   * Background_Skill updateMany
   */
  export type Background_SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Background_Skills.
     */
    data: XOR<Background_SkillUpdateManyMutationInput, Background_SkillUncheckedUpdateManyInput>
    /**
     * Filter which Background_Skills to update
     */
    where?: Background_SkillWhereInput
    /**
     * Limit how many Background_Skills to update.
     */
    limit?: number
  }

  /**
   * Background_Skill updateManyAndReturn
   */
  export type Background_SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * The data used to update Background_Skills.
     */
    data: XOR<Background_SkillUpdateManyMutationInput, Background_SkillUncheckedUpdateManyInput>
    /**
     * Filter which Background_Skills to update
     */
    where?: Background_SkillWhereInput
    /**
     * Limit how many Background_Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Background_Skill upsert
   */
  export type Background_SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Background_Skill to update in case it exists.
     */
    where: Background_SkillWhereUniqueInput
    /**
     * In case the Background_Skill found by the `where` argument doesn't exist, create a new Background_Skill with this data.
     */
    create: XOR<Background_SkillCreateInput, Background_SkillUncheckedCreateInput>
    /**
     * In case the Background_Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Background_SkillUpdateInput, Background_SkillUncheckedUpdateInput>
  }

  /**
   * Background_Skill delete
   */
  export type Background_SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
    /**
     * Filter which Background_Skill to delete.
     */
    where: Background_SkillWhereUniqueInput
  }

  /**
   * Background_Skill deleteMany
   */
  export type Background_SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background_Skills to delete
     */
    where?: Background_SkillWhereInput
    /**
     * Limit how many Background_Skills to delete.
     */
    limit?: number
  }

  /**
   * Background_Skill without action
   */
  export type Background_SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Skill
     */
    select?: Background_SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background_Skill
     */
    omit?: Background_SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_SkillInclude<ExtArgs> | null
  }


  /**
   * Model Alignment
   */

  export type AggregateAlignment = {
    _count: AlignmentCountAggregateOutputType | null
    _avg: AlignmentAvgAggregateOutputType | null
    _sum: AlignmentSumAggregateOutputType | null
    _min: AlignmentMinAggregateOutputType | null
    _max: AlignmentMaxAggregateOutputType | null
  }

  export type AlignmentAvgAggregateOutputType = {
    id: number | null
  }

  export type AlignmentSumAggregateOutputType = {
    id: bigint | null
  }

  export type AlignmentMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type AlignmentMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type AlignmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type AlignmentAvgAggregateInputType = {
    id?: true
  }

  export type AlignmentSumAggregateInputType = {
    id?: true
  }

  export type AlignmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type AlignmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type AlignmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type AlignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alignment to aggregate.
     */
    where?: AlignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alignments to fetch.
     */
    orderBy?: AlignmentOrderByWithRelationInput | AlignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alignments
    **/
    _count?: true | AlignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlignmentMaxAggregateInputType
  }

  export type GetAlignmentAggregateType<T extends AlignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAlignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlignment[P]>
      : GetScalarType<T[P], AggregateAlignment[P]>
  }




  export type AlignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlignmentWhereInput
    orderBy?: AlignmentOrderByWithAggregationInput | AlignmentOrderByWithAggregationInput[]
    by: AlignmentScalarFieldEnum[] | AlignmentScalarFieldEnum
    having?: AlignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlignmentCountAggregateInputType | true
    _avg?: AlignmentAvgAggregateInputType
    _sum?: AlignmentSumAggregateInputType
    _min?: AlignmentMinAggregateInputType
    _max?: AlignmentMaxAggregateInputType
  }

  export type AlignmentGroupByOutputType = {
    id: bigint
    name: string
    description: string
    _count: AlignmentCountAggregateOutputType | null
    _avg: AlignmentAvgAggregateOutputType | null
    _sum: AlignmentSumAggregateOutputType | null
    _min: AlignmentMinAggregateOutputType | null
    _max: AlignmentMaxAggregateOutputType | null
  }

  type GetAlignmentGroupByPayload<T extends AlignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AlignmentGroupByOutputType[P]>
        }
      >
    >


  export type AlignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    Character?: boolean | Alignment$CharacterArgs<ExtArgs>
    _count?: boolean | AlignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alignment"]>

  export type AlignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["alignment"]>

  export type AlignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["alignment"]>

  export type AlignmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type AlignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["alignment"]>
  export type AlignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | Alignment$CharacterArgs<ExtArgs>
    _count?: boolean | AlignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alignment"
    objects: {
      Character: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
    }, ExtArgs["result"]["alignment"]>
    composites: {}
  }

  type AlignmentGetPayload<S extends boolean | null | undefined | AlignmentDefaultArgs> = $Result.GetResult<Prisma.$AlignmentPayload, S>

  type AlignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlignmentCountAggregateInputType | true
    }

  export interface AlignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alignment'], meta: { name: 'Alignment' } }
    /**
     * Find zero or one Alignment that matches the filter.
     * @param {AlignmentFindUniqueArgs} args - Arguments to find a Alignment
     * @example
     * // Get one Alignment
     * const alignment = await prisma.alignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlignmentFindUniqueArgs>(args: SelectSubset<T, AlignmentFindUniqueArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlignmentFindUniqueOrThrowArgs} args - Arguments to find a Alignment
     * @example
     * // Get one Alignment
     * const alignment = await prisma.alignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AlignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentFindFirstArgs} args - Arguments to find a Alignment
     * @example
     * // Get one Alignment
     * const alignment = await prisma.alignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlignmentFindFirstArgs>(args?: SelectSubset<T, AlignmentFindFirstArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentFindFirstOrThrowArgs} args - Arguments to find a Alignment
     * @example
     * // Get one Alignment
     * const alignment = await prisma.alignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AlignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alignments
     * const alignments = await prisma.alignment.findMany()
     * 
     * // Get first 10 Alignments
     * const alignments = await prisma.alignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alignmentWithIdOnly = await prisma.alignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlignmentFindManyArgs>(args?: SelectSubset<T, AlignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alignment.
     * @param {AlignmentCreateArgs} args - Arguments to create a Alignment.
     * @example
     * // Create one Alignment
     * const Alignment = await prisma.alignment.create({
     *   data: {
     *     // ... data to create a Alignment
     *   }
     * })
     * 
     */
    create<T extends AlignmentCreateArgs>(args: SelectSubset<T, AlignmentCreateArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alignments.
     * @param {AlignmentCreateManyArgs} args - Arguments to create many Alignments.
     * @example
     * // Create many Alignments
     * const alignment = await prisma.alignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlignmentCreateManyArgs>(args?: SelectSubset<T, AlignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alignments and returns the data saved in the database.
     * @param {AlignmentCreateManyAndReturnArgs} args - Arguments to create many Alignments.
     * @example
     * // Create many Alignments
     * const alignment = await prisma.alignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alignments and only return the `id`
     * const alignmentWithIdOnly = await prisma.alignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AlignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alignment.
     * @param {AlignmentDeleteArgs} args - Arguments to delete one Alignment.
     * @example
     * // Delete one Alignment
     * const Alignment = await prisma.alignment.delete({
     *   where: {
     *     // ... filter to delete one Alignment
     *   }
     * })
     * 
     */
    delete<T extends AlignmentDeleteArgs>(args: SelectSubset<T, AlignmentDeleteArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alignment.
     * @param {AlignmentUpdateArgs} args - Arguments to update one Alignment.
     * @example
     * // Update one Alignment
     * const alignment = await prisma.alignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlignmentUpdateArgs>(args: SelectSubset<T, AlignmentUpdateArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alignments.
     * @param {AlignmentDeleteManyArgs} args - Arguments to filter Alignments to delete.
     * @example
     * // Delete a few Alignments
     * const { count } = await prisma.alignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlignmentDeleteManyArgs>(args?: SelectSubset<T, AlignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alignments
     * const alignment = await prisma.alignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlignmentUpdateManyArgs>(args: SelectSubset<T, AlignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alignments and returns the data updated in the database.
     * @param {AlignmentUpdateManyAndReturnArgs} args - Arguments to update many Alignments.
     * @example
     * // Update many Alignments
     * const alignment = await prisma.alignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alignments and only return the `id`
     * const alignmentWithIdOnly = await prisma.alignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AlignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alignment.
     * @param {AlignmentUpsertArgs} args - Arguments to update or create a Alignment.
     * @example
     * // Update or create a Alignment
     * const alignment = await prisma.alignment.upsert({
     *   create: {
     *     // ... data to create a Alignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alignment we want to update
     *   }
     * })
     */
    upsert<T extends AlignmentUpsertArgs>(args: SelectSubset<T, AlignmentUpsertArgs<ExtArgs>>): Prisma__AlignmentClient<$Result.GetResult<Prisma.$AlignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentCountArgs} args - Arguments to filter Alignments to count.
     * @example
     * // Count the number of Alignments
     * const count = await prisma.alignment.count({
     *   where: {
     *     // ... the filter for the Alignments we want to count
     *   }
     * })
    **/
    count<T extends AlignmentCountArgs>(
      args?: Subset<T, AlignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlignmentAggregateArgs>(args: Subset<T, AlignmentAggregateArgs>): Prisma.PrismaPromise<GetAlignmentAggregateType<T>>

    /**
     * Group by Alignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlignmentGroupByArgs['orderBy'] }
        : { orderBy?: AlignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alignment model
   */
  readonly fields: AlignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Character<T extends Alignment$CharacterArgs<ExtArgs> = {}>(args?: Subset<T, Alignment$CharacterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alignment model
   */
  interface AlignmentFieldRefs {
    readonly id: FieldRef<"Alignment", 'BigInt'>
    readonly name: FieldRef<"Alignment", 'String'>
    readonly description: FieldRef<"Alignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alignment findUnique
   */
  export type AlignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * Filter, which Alignment to fetch.
     */
    where: AlignmentWhereUniqueInput
  }

  /**
   * Alignment findUniqueOrThrow
   */
  export type AlignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * Filter, which Alignment to fetch.
     */
    where: AlignmentWhereUniqueInput
  }

  /**
   * Alignment findFirst
   */
  export type AlignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * Filter, which Alignment to fetch.
     */
    where?: AlignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alignments to fetch.
     */
    orderBy?: AlignmentOrderByWithRelationInput | AlignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alignments.
     */
    cursor?: AlignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alignments.
     */
    distinct?: AlignmentScalarFieldEnum | AlignmentScalarFieldEnum[]
  }

  /**
   * Alignment findFirstOrThrow
   */
  export type AlignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * Filter, which Alignment to fetch.
     */
    where?: AlignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alignments to fetch.
     */
    orderBy?: AlignmentOrderByWithRelationInput | AlignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alignments.
     */
    cursor?: AlignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alignments.
     */
    distinct?: AlignmentScalarFieldEnum | AlignmentScalarFieldEnum[]
  }

  /**
   * Alignment findMany
   */
  export type AlignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * Filter, which Alignments to fetch.
     */
    where?: AlignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alignments to fetch.
     */
    orderBy?: AlignmentOrderByWithRelationInput | AlignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alignments.
     */
    cursor?: AlignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alignments.
     */
    skip?: number
    distinct?: AlignmentScalarFieldEnum | AlignmentScalarFieldEnum[]
  }

  /**
   * Alignment create
   */
  export type AlignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Alignment.
     */
    data: XOR<AlignmentCreateInput, AlignmentUncheckedCreateInput>
  }

  /**
   * Alignment createMany
   */
  export type AlignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alignments.
     */
    data: AlignmentCreateManyInput | AlignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alignment createManyAndReturn
   */
  export type AlignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Alignments.
     */
    data: AlignmentCreateManyInput | AlignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alignment update
   */
  export type AlignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Alignment.
     */
    data: XOR<AlignmentUpdateInput, AlignmentUncheckedUpdateInput>
    /**
     * Choose, which Alignment to update.
     */
    where: AlignmentWhereUniqueInput
  }

  /**
   * Alignment updateMany
   */
  export type AlignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alignments.
     */
    data: XOR<AlignmentUpdateManyMutationInput, AlignmentUncheckedUpdateManyInput>
    /**
     * Filter which Alignments to update
     */
    where?: AlignmentWhereInput
    /**
     * Limit how many Alignments to update.
     */
    limit?: number
  }

  /**
   * Alignment updateManyAndReturn
   */
  export type AlignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * The data used to update Alignments.
     */
    data: XOR<AlignmentUpdateManyMutationInput, AlignmentUncheckedUpdateManyInput>
    /**
     * Filter which Alignments to update
     */
    where?: AlignmentWhereInput
    /**
     * Limit how many Alignments to update.
     */
    limit?: number
  }

  /**
   * Alignment upsert
   */
  export type AlignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Alignment to update in case it exists.
     */
    where: AlignmentWhereUniqueInput
    /**
     * In case the Alignment found by the `where` argument doesn't exist, create a new Alignment with this data.
     */
    create: XOR<AlignmentCreateInput, AlignmentUncheckedCreateInput>
    /**
     * In case the Alignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlignmentUpdateInput, AlignmentUncheckedUpdateInput>
  }

  /**
   * Alignment delete
   */
  export type AlignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
    /**
     * Filter which Alignment to delete.
     */
    where: AlignmentWhereUniqueInput
  }

  /**
   * Alignment deleteMany
   */
  export type AlignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alignments to delete
     */
    where?: AlignmentWhereInput
    /**
     * Limit how many Alignments to delete.
     */
    limit?: number
  }

  /**
   * Alignment.Character
   */
  export type Alignment$CharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Alignment without action
   */
  export type AlignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alignment
     */
    select?: AlignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alignment
     */
    omit?: AlignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentInclude<ExtArgs> | null
  }


  /**
   * Model PlayerSkill
   */

  export type AggregatePlayerSkill = {
    _count: PlayerSkillCountAggregateOutputType | null
    _avg: PlayerSkillAvgAggregateOutputType | null
    _sum: PlayerSkillSumAggregateOutputType | null
    _min: PlayerSkillMinAggregateOutputType | null
    _max: PlayerSkillMaxAggregateOutputType | null
  }

  export type PlayerSkillAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
  }

  export type PlayerSkillSumAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
  }

  export type PlayerSkillMinAggregateOutputType = {
    id: bigint | null
    value: string | null
    characterId: bigint | null
  }

  export type PlayerSkillMaxAggregateOutputType = {
    id: bigint | null
    value: string | null
    characterId: bigint | null
  }

  export type PlayerSkillCountAggregateOutputType = {
    id: number
    value: number
    characterId: number
    _all: number
  }


  export type PlayerSkillAvgAggregateInputType = {
    id?: true
    characterId?: true
  }

  export type PlayerSkillSumAggregateInputType = {
    id?: true
    characterId?: true
  }

  export type PlayerSkillMinAggregateInputType = {
    id?: true
    value?: true
    characterId?: true
  }

  export type PlayerSkillMaxAggregateInputType = {
    id?: true
    value?: true
    characterId?: true
  }

  export type PlayerSkillCountAggregateInputType = {
    id?: true
    value?: true
    characterId?: true
    _all?: true
  }

  export type PlayerSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSkill to aggregate.
     */
    where?: PlayerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSkills to fetch.
     */
    orderBy?: PlayerSkillOrderByWithRelationInput | PlayerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerSkills
    **/
    _count?: true | PlayerSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerSkillMaxAggregateInputType
  }

  export type GetPlayerSkillAggregateType<T extends PlayerSkillAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerSkill[P]>
      : GetScalarType<T[P], AggregatePlayerSkill[P]>
  }




  export type PlayerSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSkillWhereInput
    orderBy?: PlayerSkillOrderByWithAggregationInput | PlayerSkillOrderByWithAggregationInput[]
    by: PlayerSkillScalarFieldEnum[] | PlayerSkillScalarFieldEnum
    having?: PlayerSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerSkillCountAggregateInputType | true
    _avg?: PlayerSkillAvgAggregateInputType
    _sum?: PlayerSkillSumAggregateInputType
    _min?: PlayerSkillMinAggregateInputType
    _max?: PlayerSkillMaxAggregateInputType
  }

  export type PlayerSkillGroupByOutputType = {
    id: bigint
    value: string
    characterId: bigint
    _count: PlayerSkillCountAggregateOutputType | null
    _avg: PlayerSkillAvgAggregateOutputType | null
    _sum: PlayerSkillSumAggregateOutputType | null
    _min: PlayerSkillMinAggregateOutputType | null
    _max: PlayerSkillMaxAggregateOutputType | null
  }

  type GetPlayerSkillGroupByPayload<T extends PlayerSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerSkillGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerSkillGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    Skill?: boolean | PlayerSkill$SkillArgs<ExtArgs>
    _count?: boolean | PlayerSkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSkill"]>

  export type PlayerSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSkill"]>

  export type PlayerSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSkill"]>

  export type PlayerSkillSelectScalar = {
    id?: boolean
    value?: boolean
    characterId?: boolean
  }

  export type PlayerSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "characterId", ExtArgs["result"]["playerSkill"]>
  export type PlayerSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    Skill?: boolean | PlayerSkill$SkillArgs<ExtArgs>
    _count?: boolean | PlayerSkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type PlayerSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $PlayerSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerSkill"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      Skill: Prisma.$SkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      value: string
      characterId: bigint
    }, ExtArgs["result"]["playerSkill"]>
    composites: {}
  }

  type PlayerSkillGetPayload<S extends boolean | null | undefined | PlayerSkillDefaultArgs> = $Result.GetResult<Prisma.$PlayerSkillPayload, S>

  type PlayerSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerSkillCountAggregateInputType | true
    }

  export interface PlayerSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerSkill'], meta: { name: 'PlayerSkill' } }
    /**
     * Find zero or one PlayerSkill that matches the filter.
     * @param {PlayerSkillFindUniqueArgs} args - Arguments to find a PlayerSkill
     * @example
     * // Get one PlayerSkill
     * const playerSkill = await prisma.playerSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerSkillFindUniqueArgs>(args: SelectSubset<T, PlayerSkillFindUniqueArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerSkillFindUniqueOrThrowArgs} args - Arguments to find a PlayerSkill
     * @example
     * // Get one PlayerSkill
     * const playerSkill = await prisma.playerSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillFindFirstArgs} args - Arguments to find a PlayerSkill
     * @example
     * // Get one PlayerSkill
     * const playerSkill = await prisma.playerSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerSkillFindFirstArgs>(args?: SelectSubset<T, PlayerSkillFindFirstArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillFindFirstOrThrowArgs} args - Arguments to find a PlayerSkill
     * @example
     * // Get one PlayerSkill
     * const playerSkill = await prisma.playerSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerSkills
     * const playerSkills = await prisma.playerSkill.findMany()
     * 
     * // Get first 10 PlayerSkills
     * const playerSkills = await prisma.playerSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerSkillWithIdOnly = await prisma.playerSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerSkillFindManyArgs>(args?: SelectSubset<T, PlayerSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerSkill.
     * @param {PlayerSkillCreateArgs} args - Arguments to create a PlayerSkill.
     * @example
     * // Create one PlayerSkill
     * const PlayerSkill = await prisma.playerSkill.create({
     *   data: {
     *     // ... data to create a PlayerSkill
     *   }
     * })
     * 
     */
    create<T extends PlayerSkillCreateArgs>(args: SelectSubset<T, PlayerSkillCreateArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerSkills.
     * @param {PlayerSkillCreateManyArgs} args - Arguments to create many PlayerSkills.
     * @example
     * // Create many PlayerSkills
     * const playerSkill = await prisma.playerSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerSkillCreateManyArgs>(args?: SelectSubset<T, PlayerSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerSkills and returns the data saved in the database.
     * @param {PlayerSkillCreateManyAndReturnArgs} args - Arguments to create many PlayerSkills.
     * @example
     * // Create many PlayerSkills
     * const playerSkill = await prisma.playerSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerSkills and only return the `id`
     * const playerSkillWithIdOnly = await prisma.playerSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerSkill.
     * @param {PlayerSkillDeleteArgs} args - Arguments to delete one PlayerSkill.
     * @example
     * // Delete one PlayerSkill
     * const PlayerSkill = await prisma.playerSkill.delete({
     *   where: {
     *     // ... filter to delete one PlayerSkill
     *   }
     * })
     * 
     */
    delete<T extends PlayerSkillDeleteArgs>(args: SelectSubset<T, PlayerSkillDeleteArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerSkill.
     * @param {PlayerSkillUpdateArgs} args - Arguments to update one PlayerSkill.
     * @example
     * // Update one PlayerSkill
     * const playerSkill = await prisma.playerSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerSkillUpdateArgs>(args: SelectSubset<T, PlayerSkillUpdateArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerSkills.
     * @param {PlayerSkillDeleteManyArgs} args - Arguments to filter PlayerSkills to delete.
     * @example
     * // Delete a few PlayerSkills
     * const { count } = await prisma.playerSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerSkillDeleteManyArgs>(args?: SelectSubset<T, PlayerSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerSkills
     * const playerSkill = await prisma.playerSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerSkillUpdateManyArgs>(args: SelectSubset<T, PlayerSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSkills and returns the data updated in the database.
     * @param {PlayerSkillUpdateManyAndReturnArgs} args - Arguments to update many PlayerSkills.
     * @example
     * // Update many PlayerSkills
     * const playerSkill = await prisma.playerSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerSkills and only return the `id`
     * const playerSkillWithIdOnly = await prisma.playerSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerSkill.
     * @param {PlayerSkillUpsertArgs} args - Arguments to update or create a PlayerSkill.
     * @example
     * // Update or create a PlayerSkill
     * const playerSkill = await prisma.playerSkill.upsert({
     *   create: {
     *     // ... data to create a PlayerSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerSkill we want to update
     *   }
     * })
     */
    upsert<T extends PlayerSkillUpsertArgs>(args: SelectSubset<T, PlayerSkillUpsertArgs<ExtArgs>>): Prisma__PlayerSkillClient<$Result.GetResult<Prisma.$PlayerSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillCountArgs} args - Arguments to filter PlayerSkills to count.
     * @example
     * // Count the number of PlayerSkills
     * const count = await prisma.playerSkill.count({
     *   where: {
     *     // ... the filter for the PlayerSkills we want to count
     *   }
     * })
    **/
    count<T extends PlayerSkillCountArgs>(
      args?: Subset<T, PlayerSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerSkillAggregateArgs>(args: Subset<T, PlayerSkillAggregateArgs>): Prisma.PrismaPromise<GetPlayerSkillAggregateType<T>>

    /**
     * Group by PlayerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerSkillGroupByArgs['orderBy'] }
        : { orderBy?: PlayerSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerSkill model
   */
  readonly fields: PlayerSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Skill<T extends PlayerSkill$SkillArgs<ExtArgs> = {}>(args?: Subset<T, PlayerSkill$SkillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerSkill model
   */
  interface PlayerSkillFieldRefs {
    readonly id: FieldRef<"PlayerSkill", 'BigInt'>
    readonly value: FieldRef<"PlayerSkill", 'String'>
    readonly characterId: FieldRef<"PlayerSkill", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * PlayerSkill findUnique
   */
  export type PlayerSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSkill to fetch.
     */
    where: PlayerSkillWhereUniqueInput
  }

  /**
   * PlayerSkill findUniqueOrThrow
   */
  export type PlayerSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSkill to fetch.
     */
    where: PlayerSkillWhereUniqueInput
  }

  /**
   * PlayerSkill findFirst
   */
  export type PlayerSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSkill to fetch.
     */
    where?: PlayerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSkills to fetch.
     */
    orderBy?: PlayerSkillOrderByWithRelationInput | PlayerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSkills.
     */
    cursor?: PlayerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSkills.
     */
    distinct?: PlayerSkillScalarFieldEnum | PlayerSkillScalarFieldEnum[]
  }

  /**
   * PlayerSkill findFirstOrThrow
   */
  export type PlayerSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSkill to fetch.
     */
    where?: PlayerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSkills to fetch.
     */
    orderBy?: PlayerSkillOrderByWithRelationInput | PlayerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSkills.
     */
    cursor?: PlayerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSkills.
     */
    distinct?: PlayerSkillScalarFieldEnum | PlayerSkillScalarFieldEnum[]
  }

  /**
   * PlayerSkill findMany
   */
  export type PlayerSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSkills to fetch.
     */
    where?: PlayerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSkills to fetch.
     */
    orderBy?: PlayerSkillOrderByWithRelationInput | PlayerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerSkills.
     */
    cursor?: PlayerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSkills.
     */
    skip?: number
    distinct?: PlayerSkillScalarFieldEnum | PlayerSkillScalarFieldEnum[]
  }

  /**
   * PlayerSkill create
   */
  export type PlayerSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerSkill.
     */
    data: XOR<PlayerSkillCreateInput, PlayerSkillUncheckedCreateInput>
  }

  /**
   * PlayerSkill createMany
   */
  export type PlayerSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerSkills.
     */
    data: PlayerSkillCreateManyInput | PlayerSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerSkill createManyAndReturn
   */
  export type PlayerSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerSkills.
     */
    data: PlayerSkillCreateManyInput | PlayerSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerSkill update
   */
  export type PlayerSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerSkill.
     */
    data: XOR<PlayerSkillUpdateInput, PlayerSkillUncheckedUpdateInput>
    /**
     * Choose, which PlayerSkill to update.
     */
    where: PlayerSkillWhereUniqueInput
  }

  /**
   * PlayerSkill updateMany
   */
  export type PlayerSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerSkills.
     */
    data: XOR<PlayerSkillUpdateManyMutationInput, PlayerSkillUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSkills to update
     */
    where?: PlayerSkillWhereInput
    /**
     * Limit how many PlayerSkills to update.
     */
    limit?: number
  }

  /**
   * PlayerSkill updateManyAndReturn
   */
  export type PlayerSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * The data used to update PlayerSkills.
     */
    data: XOR<PlayerSkillUpdateManyMutationInput, PlayerSkillUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSkills to update
     */
    where?: PlayerSkillWhereInput
    /**
     * Limit how many PlayerSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerSkill upsert
   */
  export type PlayerSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerSkill to update in case it exists.
     */
    where: PlayerSkillWhereUniqueInput
    /**
     * In case the PlayerSkill found by the `where` argument doesn't exist, create a new PlayerSkill with this data.
     */
    create: XOR<PlayerSkillCreateInput, PlayerSkillUncheckedCreateInput>
    /**
     * In case the PlayerSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerSkillUpdateInput, PlayerSkillUncheckedUpdateInput>
  }

  /**
   * PlayerSkill delete
   */
  export type PlayerSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
    /**
     * Filter which PlayerSkill to delete.
     */
    where: PlayerSkillWhereUniqueInput
  }

  /**
   * PlayerSkill deleteMany
   */
  export type PlayerSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSkills to delete
     */
    where?: PlayerSkillWhereInput
    /**
     * Limit how many PlayerSkills to delete.
     */
    limit?: number
  }

  /**
   * PlayerSkill.Skill
   */
  export type PlayerSkill$SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * PlayerSkill without action
   */
  export type PlayerSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSkill
     */
    select?: PlayerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSkill
     */
    omit?: PlayerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSkillInclude<ExtArgs> | null
  }


  /**
   * Model SavingThrows
   */

  export type AggregateSavingThrows = {
    _count: SavingThrowsCountAggregateOutputType | null
    _avg: SavingThrowsAvgAggregateOutputType | null
    _sum: SavingThrowsSumAggregateOutputType | null
    _min: SavingThrowsMinAggregateOutputType | null
    _max: SavingThrowsMaxAggregateOutputType | null
  }

  export type SavingThrowsAvgAggregateOutputType = {
    id: number | null
  }

  export type SavingThrowsSumAggregateOutputType = {
    id: number | null
  }

  export type SavingThrowsMinAggregateOutputType = {
    id: number | null
    skill: string | null
    character: string | null
  }

  export type SavingThrowsMaxAggregateOutputType = {
    id: number | null
    skill: string | null
    character: string | null
  }

  export type SavingThrowsCountAggregateOutputType = {
    id: number
    skill: number
    character: number
    _all: number
  }


  export type SavingThrowsAvgAggregateInputType = {
    id?: true
  }

  export type SavingThrowsSumAggregateInputType = {
    id?: true
  }

  export type SavingThrowsMinAggregateInputType = {
    id?: true
    skill?: true
    character?: true
  }

  export type SavingThrowsMaxAggregateInputType = {
    id?: true
    skill?: true
    character?: true
  }

  export type SavingThrowsCountAggregateInputType = {
    id?: true
    skill?: true
    character?: true
    _all?: true
  }

  export type SavingThrowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingThrows to aggregate.
     */
    where?: SavingThrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingThrows to fetch.
     */
    orderBy?: SavingThrowsOrderByWithRelationInput | SavingThrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingThrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingThrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingThrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingThrows
    **/
    _count?: true | SavingThrowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingThrowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingThrowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingThrowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingThrowsMaxAggregateInputType
  }

  export type GetSavingThrowsAggregateType<T extends SavingThrowsAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingThrows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingThrows[P]>
      : GetScalarType<T[P], AggregateSavingThrows[P]>
  }




  export type SavingThrowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingThrowsWhereInput
    orderBy?: SavingThrowsOrderByWithAggregationInput | SavingThrowsOrderByWithAggregationInput[]
    by: SavingThrowsScalarFieldEnum[] | SavingThrowsScalarFieldEnum
    having?: SavingThrowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingThrowsCountAggregateInputType | true
    _avg?: SavingThrowsAvgAggregateInputType
    _sum?: SavingThrowsSumAggregateInputType
    _min?: SavingThrowsMinAggregateInputType
    _max?: SavingThrowsMaxAggregateInputType
  }

  export type SavingThrowsGroupByOutputType = {
    id: number
    skill: string
    character: string
    _count: SavingThrowsCountAggregateOutputType | null
    _avg: SavingThrowsAvgAggregateOutputType | null
    _sum: SavingThrowsSumAggregateOutputType | null
    _min: SavingThrowsMinAggregateOutputType | null
    _max: SavingThrowsMaxAggregateOutputType | null
  }

  type GetSavingThrowsGroupByPayload<T extends SavingThrowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingThrowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingThrowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingThrowsGroupByOutputType[P]>
            : GetScalarType<T[P], SavingThrowsGroupByOutputType[P]>
        }
      >
    >


  export type SavingThrowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skill?: boolean
    character?: boolean
  }, ExtArgs["result"]["savingThrows"]>

  export type SavingThrowsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skill?: boolean
    character?: boolean
  }, ExtArgs["result"]["savingThrows"]>

  export type SavingThrowsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skill?: boolean
    character?: boolean
  }, ExtArgs["result"]["savingThrows"]>

  export type SavingThrowsSelectScalar = {
    id?: boolean
    skill?: boolean
    character?: boolean
  }

  export type SavingThrowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skill" | "character", ExtArgs["result"]["savingThrows"]>

  export type $SavingThrowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingThrows"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skill: string
      character: string
    }, ExtArgs["result"]["savingThrows"]>
    composites: {}
  }

  type SavingThrowsGetPayload<S extends boolean | null | undefined | SavingThrowsDefaultArgs> = $Result.GetResult<Prisma.$SavingThrowsPayload, S>

  type SavingThrowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavingThrowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavingThrowsCountAggregateInputType | true
    }

  export interface SavingThrowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingThrows'], meta: { name: 'SavingThrows' } }
    /**
     * Find zero or one SavingThrows that matches the filter.
     * @param {SavingThrowsFindUniqueArgs} args - Arguments to find a SavingThrows
     * @example
     * // Get one SavingThrows
     * const savingThrows = await prisma.savingThrows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingThrowsFindUniqueArgs>(args: SelectSubset<T, SavingThrowsFindUniqueArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavingThrows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavingThrowsFindUniqueOrThrowArgs} args - Arguments to find a SavingThrows
     * @example
     * // Get one SavingThrows
     * const savingThrows = await prisma.savingThrows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingThrowsFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingThrowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingThrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsFindFirstArgs} args - Arguments to find a SavingThrows
     * @example
     * // Get one SavingThrows
     * const savingThrows = await prisma.savingThrows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingThrowsFindFirstArgs>(args?: SelectSubset<T, SavingThrowsFindFirstArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingThrows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsFindFirstOrThrowArgs} args - Arguments to find a SavingThrows
     * @example
     * // Get one SavingThrows
     * const savingThrows = await prisma.savingThrows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingThrowsFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingThrowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavingThrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingThrows
     * const savingThrows = await prisma.savingThrows.findMany()
     * 
     * // Get first 10 SavingThrows
     * const savingThrows = await prisma.savingThrows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingThrowsWithIdOnly = await prisma.savingThrows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingThrowsFindManyArgs>(args?: SelectSubset<T, SavingThrowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavingThrows.
     * @param {SavingThrowsCreateArgs} args - Arguments to create a SavingThrows.
     * @example
     * // Create one SavingThrows
     * const SavingThrows = await prisma.savingThrows.create({
     *   data: {
     *     // ... data to create a SavingThrows
     *   }
     * })
     * 
     */
    create<T extends SavingThrowsCreateArgs>(args: SelectSubset<T, SavingThrowsCreateArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavingThrows.
     * @param {SavingThrowsCreateManyArgs} args - Arguments to create many SavingThrows.
     * @example
     * // Create many SavingThrows
     * const savingThrows = await prisma.savingThrows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingThrowsCreateManyArgs>(args?: SelectSubset<T, SavingThrowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavingThrows and returns the data saved in the database.
     * @param {SavingThrowsCreateManyAndReturnArgs} args - Arguments to create many SavingThrows.
     * @example
     * // Create many SavingThrows
     * const savingThrows = await prisma.savingThrows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavingThrows and only return the `id`
     * const savingThrowsWithIdOnly = await prisma.savingThrows.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavingThrowsCreateManyAndReturnArgs>(args?: SelectSubset<T, SavingThrowsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavingThrows.
     * @param {SavingThrowsDeleteArgs} args - Arguments to delete one SavingThrows.
     * @example
     * // Delete one SavingThrows
     * const SavingThrows = await prisma.savingThrows.delete({
     *   where: {
     *     // ... filter to delete one SavingThrows
     *   }
     * })
     * 
     */
    delete<T extends SavingThrowsDeleteArgs>(args: SelectSubset<T, SavingThrowsDeleteArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavingThrows.
     * @param {SavingThrowsUpdateArgs} args - Arguments to update one SavingThrows.
     * @example
     * // Update one SavingThrows
     * const savingThrows = await prisma.savingThrows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingThrowsUpdateArgs>(args: SelectSubset<T, SavingThrowsUpdateArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavingThrows.
     * @param {SavingThrowsDeleteManyArgs} args - Arguments to filter SavingThrows to delete.
     * @example
     * // Delete a few SavingThrows
     * const { count } = await prisma.savingThrows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingThrowsDeleteManyArgs>(args?: SelectSubset<T, SavingThrowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingThrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingThrows
     * const savingThrows = await prisma.savingThrows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingThrowsUpdateManyArgs>(args: SelectSubset<T, SavingThrowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingThrows and returns the data updated in the database.
     * @param {SavingThrowsUpdateManyAndReturnArgs} args - Arguments to update many SavingThrows.
     * @example
     * // Update many SavingThrows
     * const savingThrows = await prisma.savingThrows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavingThrows and only return the `id`
     * const savingThrowsWithIdOnly = await prisma.savingThrows.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavingThrowsUpdateManyAndReturnArgs>(args: SelectSubset<T, SavingThrowsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavingThrows.
     * @param {SavingThrowsUpsertArgs} args - Arguments to update or create a SavingThrows.
     * @example
     * // Update or create a SavingThrows
     * const savingThrows = await prisma.savingThrows.upsert({
     *   create: {
     *     // ... data to create a SavingThrows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingThrows we want to update
     *   }
     * })
     */
    upsert<T extends SavingThrowsUpsertArgs>(args: SelectSubset<T, SavingThrowsUpsertArgs<ExtArgs>>): Prisma__SavingThrowsClient<$Result.GetResult<Prisma.$SavingThrowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavingThrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsCountArgs} args - Arguments to filter SavingThrows to count.
     * @example
     * // Count the number of SavingThrows
     * const count = await prisma.savingThrows.count({
     *   where: {
     *     // ... the filter for the SavingThrows we want to count
     *   }
     * })
    **/
    count<T extends SavingThrowsCountArgs>(
      args?: Subset<T, SavingThrowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingThrowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingThrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavingThrowsAggregateArgs>(args: Subset<T, SavingThrowsAggregateArgs>): Prisma.PrismaPromise<GetSavingThrowsAggregateType<T>>

    /**
     * Group by SavingThrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingThrowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavingThrowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingThrowsGroupByArgs['orderBy'] }
        : { orderBy?: SavingThrowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavingThrowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingThrowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingThrows model
   */
  readonly fields: SavingThrowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingThrows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingThrowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavingThrows model
   */
  interface SavingThrowsFieldRefs {
    readonly id: FieldRef<"SavingThrows", 'Int'>
    readonly skill: FieldRef<"SavingThrows", 'String'>
    readonly character: FieldRef<"SavingThrows", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavingThrows findUnique
   */
  export type SavingThrowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * Filter, which SavingThrows to fetch.
     */
    where: SavingThrowsWhereUniqueInput
  }

  /**
   * SavingThrows findUniqueOrThrow
   */
  export type SavingThrowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * Filter, which SavingThrows to fetch.
     */
    where: SavingThrowsWhereUniqueInput
  }

  /**
   * SavingThrows findFirst
   */
  export type SavingThrowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * Filter, which SavingThrows to fetch.
     */
    where?: SavingThrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingThrows to fetch.
     */
    orderBy?: SavingThrowsOrderByWithRelationInput | SavingThrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingThrows.
     */
    cursor?: SavingThrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingThrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingThrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingThrows.
     */
    distinct?: SavingThrowsScalarFieldEnum | SavingThrowsScalarFieldEnum[]
  }

  /**
   * SavingThrows findFirstOrThrow
   */
  export type SavingThrowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * Filter, which SavingThrows to fetch.
     */
    where?: SavingThrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingThrows to fetch.
     */
    orderBy?: SavingThrowsOrderByWithRelationInput | SavingThrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingThrows.
     */
    cursor?: SavingThrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingThrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingThrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingThrows.
     */
    distinct?: SavingThrowsScalarFieldEnum | SavingThrowsScalarFieldEnum[]
  }

  /**
   * SavingThrows findMany
   */
  export type SavingThrowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * Filter, which SavingThrows to fetch.
     */
    where?: SavingThrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingThrows to fetch.
     */
    orderBy?: SavingThrowsOrderByWithRelationInput | SavingThrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingThrows.
     */
    cursor?: SavingThrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingThrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingThrows.
     */
    skip?: number
    distinct?: SavingThrowsScalarFieldEnum | SavingThrowsScalarFieldEnum[]
  }

  /**
   * SavingThrows create
   */
  export type SavingThrowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * The data needed to create a SavingThrows.
     */
    data: XOR<SavingThrowsCreateInput, SavingThrowsUncheckedCreateInput>
  }

  /**
   * SavingThrows createMany
   */
  export type SavingThrowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingThrows.
     */
    data: SavingThrowsCreateManyInput | SavingThrowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingThrows createManyAndReturn
   */
  export type SavingThrowsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * The data used to create many SavingThrows.
     */
    data: SavingThrowsCreateManyInput | SavingThrowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingThrows update
   */
  export type SavingThrowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * The data needed to update a SavingThrows.
     */
    data: XOR<SavingThrowsUpdateInput, SavingThrowsUncheckedUpdateInput>
    /**
     * Choose, which SavingThrows to update.
     */
    where: SavingThrowsWhereUniqueInput
  }

  /**
   * SavingThrows updateMany
   */
  export type SavingThrowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingThrows.
     */
    data: XOR<SavingThrowsUpdateManyMutationInput, SavingThrowsUncheckedUpdateManyInput>
    /**
     * Filter which SavingThrows to update
     */
    where?: SavingThrowsWhereInput
    /**
     * Limit how many SavingThrows to update.
     */
    limit?: number
  }

  /**
   * SavingThrows updateManyAndReturn
   */
  export type SavingThrowsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * The data used to update SavingThrows.
     */
    data: XOR<SavingThrowsUpdateManyMutationInput, SavingThrowsUncheckedUpdateManyInput>
    /**
     * Filter which SavingThrows to update
     */
    where?: SavingThrowsWhereInput
    /**
     * Limit how many SavingThrows to update.
     */
    limit?: number
  }

  /**
   * SavingThrows upsert
   */
  export type SavingThrowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * The filter to search for the SavingThrows to update in case it exists.
     */
    where: SavingThrowsWhereUniqueInput
    /**
     * In case the SavingThrows found by the `where` argument doesn't exist, create a new SavingThrows with this data.
     */
    create: XOR<SavingThrowsCreateInput, SavingThrowsUncheckedCreateInput>
    /**
     * In case the SavingThrows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingThrowsUpdateInput, SavingThrowsUncheckedUpdateInput>
  }

  /**
   * SavingThrows delete
   */
  export type SavingThrowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
    /**
     * Filter which SavingThrows to delete.
     */
    where: SavingThrowsWhereUniqueInput
  }

  /**
   * SavingThrows deleteMany
   */
  export type SavingThrowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingThrows to delete
     */
    where?: SavingThrowsWhereInput
    /**
     * Limit how many SavingThrows to delete.
     */
    limit?: number
  }

  /**
   * SavingThrows without action
   */
  export type SavingThrowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingThrows
     */
    select?: SavingThrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingThrows
     */
    omit?: SavingThrowsOmit<ExtArgs> | null
  }


  /**
   * Model CharacterAbility
   */

  export type AggregateCharacterAbility = {
    _count: CharacterAbilityCountAggregateOutputType | null
    _avg: CharacterAbilityAvgAggregateOutputType | null
    _sum: CharacterAbilitySumAggregateOutputType | null
    _min: CharacterAbilityMinAggregateOutputType | null
    _max: CharacterAbilityMaxAggregateOutputType | null
  }

  export type CharacterAbilityAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    abilityId: number | null
  }

  export type CharacterAbilitySumAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
    abilityId: bigint | null
  }

  export type CharacterAbilityMinAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
    abilityId: bigint | null
  }

  export type CharacterAbilityMaxAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
    abilityId: bigint | null
  }

  export type CharacterAbilityCountAggregateOutputType = {
    id: number
    characterId: number
    abilityId: number
    _all: number
  }


  export type CharacterAbilityAvgAggregateInputType = {
    id?: true
    characterId?: true
    abilityId?: true
  }

  export type CharacterAbilitySumAggregateInputType = {
    id?: true
    characterId?: true
    abilityId?: true
  }

  export type CharacterAbilityMinAggregateInputType = {
    id?: true
    characterId?: true
    abilityId?: true
  }

  export type CharacterAbilityMaxAggregateInputType = {
    id?: true
    characterId?: true
    abilityId?: true
  }

  export type CharacterAbilityCountAggregateInputType = {
    id?: true
    characterId?: true
    abilityId?: true
    _all?: true
  }

  export type CharacterAbilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterAbility to aggregate.
     */
    where?: CharacterAbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAbilities to fetch.
     */
    orderBy?: CharacterAbilityOrderByWithRelationInput | CharacterAbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterAbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAbilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAbilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterAbilities
    **/
    _count?: true | CharacterAbilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAbilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterAbilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterAbilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterAbilityMaxAggregateInputType
  }

  export type GetCharacterAbilityAggregateType<T extends CharacterAbilityAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterAbility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterAbility[P]>
      : GetScalarType<T[P], AggregateCharacterAbility[P]>
  }




  export type CharacterAbilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterAbilityWhereInput
    orderBy?: CharacterAbilityOrderByWithAggregationInput | CharacterAbilityOrderByWithAggregationInput[]
    by: CharacterAbilityScalarFieldEnum[] | CharacterAbilityScalarFieldEnum
    having?: CharacterAbilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterAbilityCountAggregateInputType | true
    _avg?: CharacterAbilityAvgAggregateInputType
    _sum?: CharacterAbilitySumAggregateInputType
    _min?: CharacterAbilityMinAggregateInputType
    _max?: CharacterAbilityMaxAggregateInputType
  }

  export type CharacterAbilityGroupByOutputType = {
    id: bigint
    characterId: bigint
    abilityId: bigint
    _count: CharacterAbilityCountAggregateOutputType | null
    _avg: CharacterAbilityAvgAggregateOutputType | null
    _sum: CharacterAbilitySumAggregateOutputType | null
    _min: CharacterAbilityMinAggregateOutputType | null
    _max: CharacterAbilityMaxAggregateOutputType | null
  }

  type GetCharacterAbilityGroupByPayload<T extends CharacterAbilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterAbilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterAbilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterAbilityGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterAbilityGroupByOutputType[P]>
        }
      >
    >


  export type CharacterAbilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    abilityId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterAbility"]>

  export type CharacterAbilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    abilityId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterAbility"]>

  export type CharacterAbilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    abilityId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterAbility"]>

  export type CharacterAbilitySelectScalar = {
    id?: boolean
    characterId?: boolean
    abilityId?: boolean
  }

  export type CharacterAbilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "abilityId", ExtArgs["result"]["characterAbility"]>
  export type CharacterAbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
  }
  export type CharacterAbilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
  }
  export type CharacterAbilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
  }

  export type $CharacterAbilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterAbility"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      ability: Prisma.$AbilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      characterId: bigint
      abilityId: bigint
    }, ExtArgs["result"]["characterAbility"]>
    composites: {}
  }

  type CharacterAbilityGetPayload<S extends boolean | null | undefined | CharacterAbilityDefaultArgs> = $Result.GetResult<Prisma.$CharacterAbilityPayload, S>

  type CharacterAbilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterAbilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterAbilityCountAggregateInputType | true
    }

  export interface CharacterAbilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterAbility'], meta: { name: 'CharacterAbility' } }
    /**
     * Find zero or one CharacterAbility that matches the filter.
     * @param {CharacterAbilityFindUniqueArgs} args - Arguments to find a CharacterAbility
     * @example
     * // Get one CharacterAbility
     * const characterAbility = await prisma.characterAbility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterAbilityFindUniqueArgs>(args: SelectSubset<T, CharacterAbilityFindUniqueArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterAbility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterAbilityFindUniqueOrThrowArgs} args - Arguments to find a CharacterAbility
     * @example
     * // Get one CharacterAbility
     * const characterAbility = await prisma.characterAbility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterAbilityFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterAbilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterAbility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityFindFirstArgs} args - Arguments to find a CharacterAbility
     * @example
     * // Get one CharacterAbility
     * const characterAbility = await prisma.characterAbility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterAbilityFindFirstArgs>(args?: SelectSubset<T, CharacterAbilityFindFirstArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterAbility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityFindFirstOrThrowArgs} args - Arguments to find a CharacterAbility
     * @example
     * // Get one CharacterAbility
     * const characterAbility = await prisma.characterAbility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterAbilityFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterAbilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterAbilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterAbilities
     * const characterAbilities = await prisma.characterAbility.findMany()
     * 
     * // Get first 10 CharacterAbilities
     * const characterAbilities = await prisma.characterAbility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterAbilityWithIdOnly = await prisma.characterAbility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterAbilityFindManyArgs>(args?: SelectSubset<T, CharacterAbilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterAbility.
     * @param {CharacterAbilityCreateArgs} args - Arguments to create a CharacterAbility.
     * @example
     * // Create one CharacterAbility
     * const CharacterAbility = await prisma.characterAbility.create({
     *   data: {
     *     // ... data to create a CharacterAbility
     *   }
     * })
     * 
     */
    create<T extends CharacterAbilityCreateArgs>(args: SelectSubset<T, CharacterAbilityCreateArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterAbilities.
     * @param {CharacterAbilityCreateManyArgs} args - Arguments to create many CharacterAbilities.
     * @example
     * // Create many CharacterAbilities
     * const characterAbility = await prisma.characterAbility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterAbilityCreateManyArgs>(args?: SelectSubset<T, CharacterAbilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterAbilities and returns the data saved in the database.
     * @param {CharacterAbilityCreateManyAndReturnArgs} args - Arguments to create many CharacterAbilities.
     * @example
     * // Create many CharacterAbilities
     * const characterAbility = await prisma.characterAbility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterAbilities and only return the `id`
     * const characterAbilityWithIdOnly = await prisma.characterAbility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterAbilityCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterAbilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterAbility.
     * @param {CharacterAbilityDeleteArgs} args - Arguments to delete one CharacterAbility.
     * @example
     * // Delete one CharacterAbility
     * const CharacterAbility = await prisma.characterAbility.delete({
     *   where: {
     *     // ... filter to delete one CharacterAbility
     *   }
     * })
     * 
     */
    delete<T extends CharacterAbilityDeleteArgs>(args: SelectSubset<T, CharacterAbilityDeleteArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterAbility.
     * @param {CharacterAbilityUpdateArgs} args - Arguments to update one CharacterAbility.
     * @example
     * // Update one CharacterAbility
     * const characterAbility = await prisma.characterAbility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterAbilityUpdateArgs>(args: SelectSubset<T, CharacterAbilityUpdateArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterAbilities.
     * @param {CharacterAbilityDeleteManyArgs} args - Arguments to filter CharacterAbilities to delete.
     * @example
     * // Delete a few CharacterAbilities
     * const { count } = await prisma.characterAbility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterAbilityDeleteManyArgs>(args?: SelectSubset<T, CharacterAbilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterAbilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterAbilities
     * const characterAbility = await prisma.characterAbility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterAbilityUpdateManyArgs>(args: SelectSubset<T, CharacterAbilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterAbilities and returns the data updated in the database.
     * @param {CharacterAbilityUpdateManyAndReturnArgs} args - Arguments to update many CharacterAbilities.
     * @example
     * // Update many CharacterAbilities
     * const characterAbility = await prisma.characterAbility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterAbilities and only return the `id`
     * const characterAbilityWithIdOnly = await prisma.characterAbility.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterAbilityUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterAbilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterAbility.
     * @param {CharacterAbilityUpsertArgs} args - Arguments to update or create a CharacterAbility.
     * @example
     * // Update or create a CharacterAbility
     * const characterAbility = await prisma.characterAbility.upsert({
     *   create: {
     *     // ... data to create a CharacterAbility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterAbility we want to update
     *   }
     * })
     */
    upsert<T extends CharacterAbilityUpsertArgs>(args: SelectSubset<T, CharacterAbilityUpsertArgs<ExtArgs>>): Prisma__CharacterAbilityClient<$Result.GetResult<Prisma.$CharacterAbilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterAbilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityCountArgs} args - Arguments to filter CharacterAbilities to count.
     * @example
     * // Count the number of CharacterAbilities
     * const count = await prisma.characterAbility.count({
     *   where: {
     *     // ... the filter for the CharacterAbilities we want to count
     *   }
     * })
    **/
    count<T extends CharacterAbilityCountArgs>(
      args?: Subset<T, CharacterAbilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterAbilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterAbility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAbilityAggregateArgs>(args: Subset<T, CharacterAbilityAggregateArgs>): Prisma.PrismaPromise<GetCharacterAbilityAggregateType<T>>

    /**
     * Group by CharacterAbility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAbilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterAbilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterAbilityGroupByArgs['orderBy'] }
        : { orderBy?: CharacterAbilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterAbilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterAbilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterAbility model
   */
  readonly fields: CharacterAbilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterAbility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterAbilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ability<T extends AbilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AbilityDefaultArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterAbility model
   */
  interface CharacterAbilityFieldRefs {
    readonly id: FieldRef<"CharacterAbility", 'BigInt'>
    readonly characterId: FieldRef<"CharacterAbility", 'BigInt'>
    readonly abilityId: FieldRef<"CharacterAbility", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * CharacterAbility findUnique
   */
  export type CharacterAbilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAbility to fetch.
     */
    where: CharacterAbilityWhereUniqueInput
  }

  /**
   * CharacterAbility findUniqueOrThrow
   */
  export type CharacterAbilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAbility to fetch.
     */
    where: CharacterAbilityWhereUniqueInput
  }

  /**
   * CharacterAbility findFirst
   */
  export type CharacterAbilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAbility to fetch.
     */
    where?: CharacterAbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAbilities to fetch.
     */
    orderBy?: CharacterAbilityOrderByWithRelationInput | CharacterAbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterAbilities.
     */
    cursor?: CharacterAbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAbilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAbilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterAbilities.
     */
    distinct?: CharacterAbilityScalarFieldEnum | CharacterAbilityScalarFieldEnum[]
  }

  /**
   * CharacterAbility findFirstOrThrow
   */
  export type CharacterAbilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAbility to fetch.
     */
    where?: CharacterAbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAbilities to fetch.
     */
    orderBy?: CharacterAbilityOrderByWithRelationInput | CharacterAbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterAbilities.
     */
    cursor?: CharacterAbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAbilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAbilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterAbilities.
     */
    distinct?: CharacterAbilityScalarFieldEnum | CharacterAbilityScalarFieldEnum[]
  }

  /**
   * CharacterAbility findMany
   */
  export type CharacterAbilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAbilities to fetch.
     */
    where?: CharacterAbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAbilities to fetch.
     */
    orderBy?: CharacterAbilityOrderByWithRelationInput | CharacterAbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterAbilities.
     */
    cursor?: CharacterAbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAbilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAbilities.
     */
    skip?: number
    distinct?: CharacterAbilityScalarFieldEnum | CharacterAbilityScalarFieldEnum[]
  }

  /**
   * CharacterAbility create
   */
  export type CharacterAbilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterAbility.
     */
    data: XOR<CharacterAbilityCreateInput, CharacterAbilityUncheckedCreateInput>
  }

  /**
   * CharacterAbility createMany
   */
  export type CharacterAbilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterAbilities.
     */
    data: CharacterAbilityCreateManyInput | CharacterAbilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterAbility createManyAndReturn
   */
  export type CharacterAbilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterAbilities.
     */
    data: CharacterAbilityCreateManyInput | CharacterAbilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterAbility update
   */
  export type CharacterAbilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterAbility.
     */
    data: XOR<CharacterAbilityUpdateInput, CharacterAbilityUncheckedUpdateInput>
    /**
     * Choose, which CharacterAbility to update.
     */
    where: CharacterAbilityWhereUniqueInput
  }

  /**
   * CharacterAbility updateMany
   */
  export type CharacterAbilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterAbilities.
     */
    data: XOR<CharacterAbilityUpdateManyMutationInput, CharacterAbilityUncheckedUpdateManyInput>
    /**
     * Filter which CharacterAbilities to update
     */
    where?: CharacterAbilityWhereInput
    /**
     * Limit how many CharacterAbilities to update.
     */
    limit?: number
  }

  /**
   * CharacterAbility updateManyAndReturn
   */
  export type CharacterAbilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * The data used to update CharacterAbilities.
     */
    data: XOR<CharacterAbilityUpdateManyMutationInput, CharacterAbilityUncheckedUpdateManyInput>
    /**
     * Filter which CharacterAbilities to update
     */
    where?: CharacterAbilityWhereInput
    /**
     * Limit how many CharacterAbilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterAbility upsert
   */
  export type CharacterAbilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterAbility to update in case it exists.
     */
    where: CharacterAbilityWhereUniqueInput
    /**
     * In case the CharacterAbility found by the `where` argument doesn't exist, create a new CharacterAbility with this data.
     */
    create: XOR<CharacterAbilityCreateInput, CharacterAbilityUncheckedCreateInput>
    /**
     * In case the CharacterAbility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterAbilityUpdateInput, CharacterAbilityUncheckedUpdateInput>
  }

  /**
   * CharacterAbility delete
   */
  export type CharacterAbilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
    /**
     * Filter which CharacterAbility to delete.
     */
    where: CharacterAbilityWhereUniqueInput
  }

  /**
   * CharacterAbility deleteMany
   */
  export type CharacterAbilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterAbilities to delete
     */
    where?: CharacterAbilityWhereInput
    /**
     * Limit how many CharacterAbilities to delete.
     */
    limit?: number
  }

  /**
   * CharacterAbility without action
   */
  export type CharacterAbilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAbility
     */
    select?: CharacterAbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAbility
     */
    omit?: CharacterAbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAbilityInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: bigint | null
  }

  export type LanguageMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    exotic: boolean | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    exotic: boolean | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    description: number
    exotic: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    exotic?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    exotic?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    exotic?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: bigint
    name: string
    description: string
    exotic: boolean
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    exotic?: boolean
    characters?: boolean | Language$charactersArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    exotic?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    exotic?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    exotic?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "exotic", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | Language$charactersArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      characters: Prisma.$CharacterLanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      exotic: boolean
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends Language$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Language$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'BigInt'>
    readonly name: FieldRef<"Language", 'String'>
    readonly description: FieldRef<"Language", 'String'>
    readonly exotic: FieldRef<"Language", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.characters
   */
  export type Language$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    where?: CharacterLanguageWhereInput
    orderBy?: CharacterLanguageOrderByWithRelationInput | CharacterLanguageOrderByWithRelationInput[]
    cursor?: CharacterLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterLanguageScalarFieldEnum | CharacterLanguageScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model CharacterLanguage
   */

  export type AggregateCharacterLanguage = {
    _count: CharacterLanguageCountAggregateOutputType | null
    _avg: CharacterLanguageAvgAggregateOutputType | null
    _sum: CharacterLanguageSumAggregateOutputType | null
    _min: CharacterLanguageMinAggregateOutputType | null
    _max: CharacterLanguageMaxAggregateOutputType | null
  }

  export type CharacterLanguageAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    languageId: number | null
  }

  export type CharacterLanguageSumAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
    languageId: bigint | null
  }

  export type CharacterLanguageMinAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
    languageId: bigint | null
  }

  export type CharacterLanguageMaxAggregateOutputType = {
    id: bigint | null
    characterId: bigint | null
    languageId: bigint | null
  }

  export type CharacterLanguageCountAggregateOutputType = {
    id: number
    characterId: number
    languageId: number
    _all: number
  }


  export type CharacterLanguageAvgAggregateInputType = {
    id?: true
    characterId?: true
    languageId?: true
  }

  export type CharacterLanguageSumAggregateInputType = {
    id?: true
    characterId?: true
    languageId?: true
  }

  export type CharacterLanguageMinAggregateInputType = {
    id?: true
    characterId?: true
    languageId?: true
  }

  export type CharacterLanguageMaxAggregateInputType = {
    id?: true
    characterId?: true
    languageId?: true
  }

  export type CharacterLanguageCountAggregateInputType = {
    id?: true
    characterId?: true
    languageId?: true
    _all?: true
  }

  export type CharacterLanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterLanguage to aggregate.
     */
    where?: CharacterLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterLanguages to fetch.
     */
    orderBy?: CharacterLanguageOrderByWithRelationInput | CharacterLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterLanguages
    **/
    _count?: true | CharacterLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterLanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterLanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterLanguageMaxAggregateInputType
  }

  export type GetCharacterLanguageAggregateType<T extends CharacterLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterLanguage[P]>
      : GetScalarType<T[P], AggregateCharacterLanguage[P]>
  }




  export type CharacterLanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterLanguageWhereInput
    orderBy?: CharacterLanguageOrderByWithAggregationInput | CharacterLanguageOrderByWithAggregationInput[]
    by: CharacterLanguageScalarFieldEnum[] | CharacterLanguageScalarFieldEnum
    having?: CharacterLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterLanguageCountAggregateInputType | true
    _avg?: CharacterLanguageAvgAggregateInputType
    _sum?: CharacterLanguageSumAggregateInputType
    _min?: CharacterLanguageMinAggregateInputType
    _max?: CharacterLanguageMaxAggregateInputType
  }

  export type CharacterLanguageGroupByOutputType = {
    id: bigint
    characterId: bigint
    languageId: bigint
    _count: CharacterLanguageCountAggregateOutputType | null
    _avg: CharacterLanguageAvgAggregateOutputType | null
    _sum: CharacterLanguageSumAggregateOutputType | null
    _min: CharacterLanguageMinAggregateOutputType | null
    _max: CharacterLanguageMaxAggregateOutputType | null
  }

  type GetCharacterLanguageGroupByPayload<T extends CharacterLanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterLanguageGroupByOutputType[P]>
        }
      >
    >


  export type CharacterLanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    languageId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterLanguage"]>

  export type CharacterLanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    languageId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterLanguage"]>

  export type CharacterLanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    languageId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterLanguage"]>

  export type CharacterLanguageSelectScalar = {
    id?: boolean
    characterId?: boolean
    languageId?: boolean
  }

  export type CharacterLanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "languageId", ExtArgs["result"]["characterLanguage"]>
  export type CharacterLanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type CharacterLanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type CharacterLanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $CharacterLanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterLanguage"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      characterId: bigint
      languageId: bigint
    }, ExtArgs["result"]["characterLanguage"]>
    composites: {}
  }

  type CharacterLanguageGetPayload<S extends boolean | null | undefined | CharacterLanguageDefaultArgs> = $Result.GetResult<Prisma.$CharacterLanguagePayload, S>

  type CharacterLanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterLanguageCountAggregateInputType | true
    }

  export interface CharacterLanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterLanguage'], meta: { name: 'CharacterLanguage' } }
    /**
     * Find zero or one CharacterLanguage that matches the filter.
     * @param {CharacterLanguageFindUniqueArgs} args - Arguments to find a CharacterLanguage
     * @example
     * // Get one CharacterLanguage
     * const characterLanguage = await prisma.characterLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterLanguageFindUniqueArgs>(args: SelectSubset<T, CharacterLanguageFindUniqueArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterLanguageFindUniqueOrThrowArgs} args - Arguments to find a CharacterLanguage
     * @example
     * // Get one CharacterLanguage
     * const characterLanguage = await prisma.characterLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterLanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterLanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageFindFirstArgs} args - Arguments to find a CharacterLanguage
     * @example
     * // Get one CharacterLanguage
     * const characterLanguage = await prisma.characterLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterLanguageFindFirstArgs>(args?: SelectSubset<T, CharacterLanguageFindFirstArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageFindFirstOrThrowArgs} args - Arguments to find a CharacterLanguage
     * @example
     * // Get one CharacterLanguage
     * const characterLanguage = await prisma.characterLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterLanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterLanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterLanguages
     * const characterLanguages = await prisma.characterLanguage.findMany()
     * 
     * // Get first 10 CharacterLanguages
     * const characterLanguages = await prisma.characterLanguage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterLanguageWithIdOnly = await prisma.characterLanguage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterLanguageFindManyArgs>(args?: SelectSubset<T, CharacterLanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterLanguage.
     * @param {CharacterLanguageCreateArgs} args - Arguments to create a CharacterLanguage.
     * @example
     * // Create one CharacterLanguage
     * const CharacterLanguage = await prisma.characterLanguage.create({
     *   data: {
     *     // ... data to create a CharacterLanguage
     *   }
     * })
     * 
     */
    create<T extends CharacterLanguageCreateArgs>(args: SelectSubset<T, CharacterLanguageCreateArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterLanguages.
     * @param {CharacterLanguageCreateManyArgs} args - Arguments to create many CharacterLanguages.
     * @example
     * // Create many CharacterLanguages
     * const characterLanguage = await prisma.characterLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterLanguageCreateManyArgs>(args?: SelectSubset<T, CharacterLanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterLanguages and returns the data saved in the database.
     * @param {CharacterLanguageCreateManyAndReturnArgs} args - Arguments to create many CharacterLanguages.
     * @example
     * // Create many CharacterLanguages
     * const characterLanguage = await prisma.characterLanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterLanguages and only return the `id`
     * const characterLanguageWithIdOnly = await prisma.characterLanguage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterLanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterLanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterLanguage.
     * @param {CharacterLanguageDeleteArgs} args - Arguments to delete one CharacterLanguage.
     * @example
     * // Delete one CharacterLanguage
     * const CharacterLanguage = await prisma.characterLanguage.delete({
     *   where: {
     *     // ... filter to delete one CharacterLanguage
     *   }
     * })
     * 
     */
    delete<T extends CharacterLanguageDeleteArgs>(args: SelectSubset<T, CharacterLanguageDeleteArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterLanguage.
     * @param {CharacterLanguageUpdateArgs} args - Arguments to update one CharacterLanguage.
     * @example
     * // Update one CharacterLanguage
     * const characterLanguage = await prisma.characterLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterLanguageUpdateArgs>(args: SelectSubset<T, CharacterLanguageUpdateArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterLanguages.
     * @param {CharacterLanguageDeleteManyArgs} args - Arguments to filter CharacterLanguages to delete.
     * @example
     * // Delete a few CharacterLanguages
     * const { count } = await prisma.characterLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterLanguageDeleteManyArgs>(args?: SelectSubset<T, CharacterLanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterLanguages
     * const characterLanguage = await prisma.characterLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterLanguageUpdateManyArgs>(args: SelectSubset<T, CharacterLanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterLanguages and returns the data updated in the database.
     * @param {CharacterLanguageUpdateManyAndReturnArgs} args - Arguments to update many CharacterLanguages.
     * @example
     * // Update many CharacterLanguages
     * const characterLanguage = await prisma.characterLanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterLanguages and only return the `id`
     * const characterLanguageWithIdOnly = await prisma.characterLanguage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterLanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterLanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterLanguage.
     * @param {CharacterLanguageUpsertArgs} args - Arguments to update or create a CharacterLanguage.
     * @example
     * // Update or create a CharacterLanguage
     * const characterLanguage = await prisma.characterLanguage.upsert({
     *   create: {
     *     // ... data to create a CharacterLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterLanguage we want to update
     *   }
     * })
     */
    upsert<T extends CharacterLanguageUpsertArgs>(args: SelectSubset<T, CharacterLanguageUpsertArgs<ExtArgs>>): Prisma__CharacterLanguageClient<$Result.GetResult<Prisma.$CharacterLanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageCountArgs} args - Arguments to filter CharacterLanguages to count.
     * @example
     * // Count the number of CharacterLanguages
     * const count = await prisma.characterLanguage.count({
     *   where: {
     *     // ... the filter for the CharacterLanguages we want to count
     *   }
     * })
    **/
    count<T extends CharacterLanguageCountArgs>(
      args?: Subset<T, CharacterLanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterLanguageAggregateArgs>(args: Subset<T, CharacterLanguageAggregateArgs>): Prisma.PrismaPromise<GetCharacterLanguageAggregateType<T>>

    /**
     * Group by CharacterLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterLanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterLanguageGroupByArgs['orderBy'] }
        : { orderBy?: CharacterLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterLanguage model
   */
  readonly fields: CharacterLanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterLanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterLanguage model
   */
  interface CharacterLanguageFieldRefs {
    readonly id: FieldRef<"CharacterLanguage", 'BigInt'>
    readonly characterId: FieldRef<"CharacterLanguage", 'BigInt'>
    readonly languageId: FieldRef<"CharacterLanguage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * CharacterLanguage findUnique
   */
  export type CharacterLanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CharacterLanguage to fetch.
     */
    where: CharacterLanguageWhereUniqueInput
  }

  /**
   * CharacterLanguage findUniqueOrThrow
   */
  export type CharacterLanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CharacterLanguage to fetch.
     */
    where: CharacterLanguageWhereUniqueInput
  }

  /**
   * CharacterLanguage findFirst
   */
  export type CharacterLanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CharacterLanguage to fetch.
     */
    where?: CharacterLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterLanguages to fetch.
     */
    orderBy?: CharacterLanguageOrderByWithRelationInput | CharacterLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterLanguages.
     */
    cursor?: CharacterLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterLanguages.
     */
    distinct?: CharacterLanguageScalarFieldEnum | CharacterLanguageScalarFieldEnum[]
  }

  /**
   * CharacterLanguage findFirstOrThrow
   */
  export type CharacterLanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CharacterLanguage to fetch.
     */
    where?: CharacterLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterLanguages to fetch.
     */
    orderBy?: CharacterLanguageOrderByWithRelationInput | CharacterLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterLanguages.
     */
    cursor?: CharacterLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterLanguages.
     */
    distinct?: CharacterLanguageScalarFieldEnum | CharacterLanguageScalarFieldEnum[]
  }

  /**
   * CharacterLanguage findMany
   */
  export type CharacterLanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CharacterLanguages to fetch.
     */
    where?: CharacterLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterLanguages to fetch.
     */
    orderBy?: CharacterLanguageOrderByWithRelationInput | CharacterLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterLanguages.
     */
    cursor?: CharacterLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterLanguages.
     */
    skip?: number
    distinct?: CharacterLanguageScalarFieldEnum | CharacterLanguageScalarFieldEnum[]
  }

  /**
   * CharacterLanguage create
   */
  export type CharacterLanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterLanguage.
     */
    data: XOR<CharacterLanguageCreateInput, CharacterLanguageUncheckedCreateInput>
  }

  /**
   * CharacterLanguage createMany
   */
  export type CharacterLanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterLanguages.
     */
    data: CharacterLanguageCreateManyInput | CharacterLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterLanguage createManyAndReturn
   */
  export type CharacterLanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterLanguages.
     */
    data: CharacterLanguageCreateManyInput | CharacterLanguageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterLanguage update
   */
  export type CharacterLanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterLanguage.
     */
    data: XOR<CharacterLanguageUpdateInput, CharacterLanguageUncheckedUpdateInput>
    /**
     * Choose, which CharacterLanguage to update.
     */
    where: CharacterLanguageWhereUniqueInput
  }

  /**
   * CharacterLanguage updateMany
   */
  export type CharacterLanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterLanguages.
     */
    data: XOR<CharacterLanguageUpdateManyMutationInput, CharacterLanguageUncheckedUpdateManyInput>
    /**
     * Filter which CharacterLanguages to update
     */
    where?: CharacterLanguageWhereInput
    /**
     * Limit how many CharacterLanguages to update.
     */
    limit?: number
  }

  /**
   * CharacterLanguage updateManyAndReturn
   */
  export type CharacterLanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * The data used to update CharacterLanguages.
     */
    data: XOR<CharacterLanguageUpdateManyMutationInput, CharacterLanguageUncheckedUpdateManyInput>
    /**
     * Filter which CharacterLanguages to update
     */
    where?: CharacterLanguageWhereInput
    /**
     * Limit how many CharacterLanguages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterLanguage upsert
   */
  export type CharacterLanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterLanguage to update in case it exists.
     */
    where: CharacterLanguageWhereUniqueInput
    /**
     * In case the CharacterLanguage found by the `where` argument doesn't exist, create a new CharacterLanguage with this data.
     */
    create: XOR<CharacterLanguageCreateInput, CharacterLanguageUncheckedCreateInput>
    /**
     * In case the CharacterLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterLanguageUpdateInput, CharacterLanguageUncheckedUpdateInput>
  }

  /**
   * CharacterLanguage delete
   */
  export type CharacterLanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
    /**
     * Filter which CharacterLanguage to delete.
     */
    where: CharacterLanguageWhereUniqueInput
  }

  /**
   * CharacterLanguage deleteMany
   */
  export type CharacterLanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterLanguages to delete
     */
    where?: CharacterLanguageWhereInput
    /**
     * Limit how many CharacterLanguages to delete.
     */
    limit?: number
  }

  /**
   * CharacterLanguage without action
   */
  export type CharacterLanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterLanguage
     */
    select?: CharacterLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterLanguage
     */
    omit?: CharacterLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterLanguageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    classId: 'classId',
    backgroundId: 'backgroundId',
    alignmentId: 'alignmentId',
    xp: 'xp',
    level: 'level',
    name: 'name',
    player: 'player',
    AC: 'AC',
    speed: 'speed',
    hp: 'hp',
    max_hp: 'max_hp',
    temp_hp: 'temp_hp',
    personality: 'personality',
    ideals: 'ideals',
    bonds: 'bonds',
    flaws: 'flaws',
    age: 'age',
    height: 'height',
    weight: 'weight',
    eyes: 'eyes',
    skin: 'skin',
    hair: 'hair',
    appearance: 'appearance',
    allies: 'allies',
    backstory: 'backstory',
    treasure: 'treasure',
    traits: 'traits'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    subraceOfId: 'subraceOfId'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const TraitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TraitScalarFieldEnum = (typeof TraitScalarFieldEnum)[keyof typeof TraitScalarFieldEnum]


  export const RaceTraitScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    traitId: 'traitId'
  };

  export type RaceTraitScalarFieldEnum = (typeof RaceTraitScalarFieldEnum)[keyof typeof RaceTraitScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    caster_type: 'caster_type',
    subclass: 'subclass',
    hit_dice: 'hit_dice'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const AbilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    short_desc: 'short_desc',
    skillid: 'skillid'
  };

  export type AbilityScalarFieldEnum = (typeof AbilityScalarFieldEnum)[keyof typeof AbilityScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const BackgroundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type BackgroundScalarFieldEnum = (typeof BackgroundScalarFieldEnum)[keyof typeof BackgroundScalarFieldEnum]


  export const Background_SkillScalarFieldEnum: {
    id: 'id',
    skillId: 'skillId',
    backgroundId: 'backgroundId'
  };

  export type Background_SkillScalarFieldEnum = (typeof Background_SkillScalarFieldEnum)[keyof typeof Background_SkillScalarFieldEnum]


  export const AlignmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type AlignmentScalarFieldEnum = (typeof AlignmentScalarFieldEnum)[keyof typeof AlignmentScalarFieldEnum]


  export const PlayerSkillScalarFieldEnum: {
    id: 'id',
    value: 'value',
    characterId: 'characterId'
  };

  export type PlayerSkillScalarFieldEnum = (typeof PlayerSkillScalarFieldEnum)[keyof typeof PlayerSkillScalarFieldEnum]


  export const SavingThrowsScalarFieldEnum: {
    id: 'id',
    skill: 'skill',
    character: 'character'
  };

  export type SavingThrowsScalarFieldEnum = (typeof SavingThrowsScalarFieldEnum)[keyof typeof SavingThrowsScalarFieldEnum]


  export const CharacterAbilityScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    abilityId: 'abilityId'
  };

  export type CharacterAbilityScalarFieldEnum = (typeof CharacterAbilityScalarFieldEnum)[keyof typeof CharacterAbilityScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    exotic: 'exotic'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const CharacterLanguageScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    languageId: 'languageId'
  };

  export type CharacterLanguageScalarFieldEnum = (typeof CharacterLanguageScalarFieldEnum)[keyof typeof CharacterLanguageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: BigIntFilter<"Character"> | bigint | number
    raceId?: BigIntFilter<"Character"> | bigint | number
    classId?: BigIntFilter<"Character"> | bigint | number
    backgroundId?: BigIntFilter<"Character"> | bigint | number
    alignmentId?: BigIntFilter<"Character"> | bigint | number
    xp?: IntFilter<"Character"> | number
    level?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    player?: StringFilter<"Character"> | string
    AC?: IntFilter<"Character"> | number
    speed?: IntFilter<"Character"> | number
    hp?: IntFilter<"Character"> | number
    max_hp?: IntFilter<"Character"> | number
    temp_hp?: IntFilter<"Character"> | number
    personality?: StringFilter<"Character"> | string
    ideals?: StringFilter<"Character"> | string
    bonds?: StringFilter<"Character"> | string
    flaws?: StringFilter<"Character"> | string
    age?: IntFilter<"Character"> | number
    height?: StringFilter<"Character"> | string
    weight?: StringFilter<"Character"> | string
    eyes?: StringFilter<"Character"> | string
    skin?: StringFilter<"Character"> | string
    hair?: StringFilter<"Character"> | string
    appearance?: StringFilter<"Character"> | string
    allies?: StringFilter<"Character"> | string
    backstory?: StringFilter<"Character"> | string
    treasure?: StringFilter<"Character"> | string
    traits?: StringFilter<"Character"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    background?: XOR<BackgroundScalarRelationFilter, BackgroundWhereInput>
    alignment?: XOR<AlignmentScalarRelationFilter, AlignmentWhereInput>
    playerSkills?: PlayerSkillListRelationFilter
    abilities?: CharacterAbilityListRelationFilter
    languages?: CharacterLanguageListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    name?: SortOrder
    player?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    personality?: SortOrder
    ideals?: SortOrder
    bonds?: SortOrder
    flaws?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    eyes?: SortOrder
    skin?: SortOrder
    hair?: SortOrder
    appearance?: SortOrder
    allies?: SortOrder
    backstory?: SortOrder
    treasure?: SortOrder
    traits?: SortOrder
    race?: RaceOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    background?: BackgroundOrderByWithRelationInput
    alignment?: AlignmentOrderByWithRelationInput
    playerSkills?: PlayerSkillOrderByRelationAggregateInput
    abilities?: CharacterAbilityOrderByRelationAggregateInput
    languages?: CharacterLanguageOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    backgroundId?: bigint | number
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    raceId?: BigIntFilter<"Character"> | bigint | number
    classId?: BigIntFilter<"Character"> | bigint | number
    alignmentId?: BigIntFilter<"Character"> | bigint | number
    xp?: IntFilter<"Character"> | number
    level?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    player?: StringFilter<"Character"> | string
    AC?: IntFilter<"Character"> | number
    speed?: IntFilter<"Character"> | number
    hp?: IntFilter<"Character"> | number
    max_hp?: IntFilter<"Character"> | number
    temp_hp?: IntFilter<"Character"> | number
    personality?: StringFilter<"Character"> | string
    ideals?: StringFilter<"Character"> | string
    bonds?: StringFilter<"Character"> | string
    flaws?: StringFilter<"Character"> | string
    age?: IntFilter<"Character"> | number
    height?: StringFilter<"Character"> | string
    weight?: StringFilter<"Character"> | string
    eyes?: StringFilter<"Character"> | string
    skin?: StringFilter<"Character"> | string
    hair?: StringFilter<"Character"> | string
    appearance?: StringFilter<"Character"> | string
    allies?: StringFilter<"Character"> | string
    backstory?: StringFilter<"Character"> | string
    treasure?: StringFilter<"Character"> | string
    traits?: StringFilter<"Character"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    background?: XOR<BackgroundScalarRelationFilter, BackgroundWhereInput>
    alignment?: XOR<AlignmentScalarRelationFilter, AlignmentWhereInput>
    playerSkills?: PlayerSkillListRelationFilter
    abilities?: CharacterAbilityListRelationFilter
    languages?: CharacterLanguageListRelationFilter
  }, "id" | "backgroundId">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    name?: SortOrder
    player?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    personality?: SortOrder
    ideals?: SortOrder
    bonds?: SortOrder
    flaws?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    eyes?: SortOrder
    skin?: SortOrder
    hair?: SortOrder
    appearance?: SortOrder
    allies?: SortOrder
    backstory?: SortOrder
    treasure?: SortOrder
    traits?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Character"> | bigint | number
    raceId?: BigIntWithAggregatesFilter<"Character"> | bigint | number
    classId?: BigIntWithAggregatesFilter<"Character"> | bigint | number
    backgroundId?: BigIntWithAggregatesFilter<"Character"> | bigint | number
    alignmentId?: BigIntWithAggregatesFilter<"Character"> | bigint | number
    xp?: IntWithAggregatesFilter<"Character"> | number
    level?: IntWithAggregatesFilter<"Character"> | number
    name?: StringWithAggregatesFilter<"Character"> | string
    player?: StringWithAggregatesFilter<"Character"> | string
    AC?: IntWithAggregatesFilter<"Character"> | number
    speed?: IntWithAggregatesFilter<"Character"> | number
    hp?: IntWithAggregatesFilter<"Character"> | number
    max_hp?: IntWithAggregatesFilter<"Character"> | number
    temp_hp?: IntWithAggregatesFilter<"Character"> | number
    personality?: StringWithAggregatesFilter<"Character"> | string
    ideals?: StringWithAggregatesFilter<"Character"> | string
    bonds?: StringWithAggregatesFilter<"Character"> | string
    flaws?: StringWithAggregatesFilter<"Character"> | string
    age?: IntWithAggregatesFilter<"Character"> | number
    height?: StringWithAggregatesFilter<"Character"> | string
    weight?: StringWithAggregatesFilter<"Character"> | string
    eyes?: StringWithAggregatesFilter<"Character"> | string
    skin?: StringWithAggregatesFilter<"Character"> | string
    hair?: StringWithAggregatesFilter<"Character"> | string
    appearance?: StringWithAggregatesFilter<"Character"> | string
    allies?: StringWithAggregatesFilter<"Character"> | string
    backstory?: StringWithAggregatesFilter<"Character"> | string
    treasure?: StringWithAggregatesFilter<"Character"> | string
    traits?: StringWithAggregatesFilter<"Character"> | string
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: BigIntFilter<"Race"> | bigint | number
    name?: StringFilter<"Race"> | string
    description?: StringFilter<"Race"> | string
    subraceOfId?: BigIntNullableFilter<"Race"> | bigint | number | null
    Race?: RaceListRelationFilter
    subrace_of?: XOR<RaceNullableScalarRelationFilter, RaceWhereInput> | null
    Trait?: TraitListRelationFilter
    traits?: RaceTraitListRelationFilter
    Character?: CharacterListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subraceOfId?: SortOrderInput | SortOrder
    Race?: RaceOrderByRelationAggregateInput
    subrace_of?: RaceOrderByWithRelationInput
    Trait?: TraitOrderByRelationAggregateInput
    traits?: RaceTraitOrderByRelationAggregateInput
    Character?: CharacterOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    name?: StringFilter<"Race"> | string
    description?: StringFilter<"Race"> | string
    subraceOfId?: BigIntNullableFilter<"Race"> | bigint | number | null
    Race?: RaceListRelationFilter
    subrace_of?: XOR<RaceNullableScalarRelationFilter, RaceWhereInput> | null
    Trait?: TraitListRelationFilter
    traits?: RaceTraitListRelationFilter
    Character?: CharacterListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subraceOfId?: SortOrderInput | SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Race"> | bigint | number
    name?: StringWithAggregatesFilter<"Race"> | string
    description?: StringWithAggregatesFilter<"Race"> | string
    subraceOfId?: BigIntNullableWithAggregatesFilter<"Race"> | bigint | number | null
  }

  export type TraitWhereInput = {
    AND?: TraitWhereInput | TraitWhereInput[]
    OR?: TraitWhereInput[]
    NOT?: TraitWhereInput | TraitWhereInput[]
    id?: BigIntFilter<"Trait"> | bigint | number
    name?: StringFilter<"Trait"> | string
    description?: StringFilter<"Trait"> | string
    Race?: RaceListRelationFilter
    races?: RaceTraitListRelationFilter
  }

  export type TraitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    Race?: RaceOrderByRelationAggregateInput
    races?: RaceTraitOrderByRelationAggregateInput
  }

  export type TraitWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TraitWhereInput | TraitWhereInput[]
    OR?: TraitWhereInput[]
    NOT?: TraitWhereInput | TraitWhereInput[]
    name?: StringFilter<"Trait"> | string
    description?: StringFilter<"Trait"> | string
    Race?: RaceListRelationFilter
    races?: RaceTraitListRelationFilter
  }, "id">

  export type TraitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: TraitCountOrderByAggregateInput
    _avg?: TraitAvgOrderByAggregateInput
    _max?: TraitMaxOrderByAggregateInput
    _min?: TraitMinOrderByAggregateInput
    _sum?: TraitSumOrderByAggregateInput
  }

  export type TraitScalarWhereWithAggregatesInput = {
    AND?: TraitScalarWhereWithAggregatesInput | TraitScalarWhereWithAggregatesInput[]
    OR?: TraitScalarWhereWithAggregatesInput[]
    NOT?: TraitScalarWhereWithAggregatesInput | TraitScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Trait"> | bigint | number
    name?: StringWithAggregatesFilter<"Trait"> | string
    description?: StringWithAggregatesFilter<"Trait"> | string
  }

  export type RaceTraitWhereInput = {
    AND?: RaceTraitWhereInput | RaceTraitWhereInput[]
    OR?: RaceTraitWhereInput[]
    NOT?: RaceTraitWhereInput | RaceTraitWhereInput[]
    id?: IntFilter<"RaceTrait"> | number
    raceId?: BigIntFilter<"RaceTrait"> | bigint | number
    traitId?: BigIntFilter<"RaceTrait"> | bigint | number
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    trait?: XOR<TraitScalarRelationFilter, TraitWhereInput>
  }

  export type RaceTraitOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
    race?: RaceOrderByWithRelationInput
    trait?: TraitOrderByWithRelationInput
  }

  export type RaceTraitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceTraitWhereInput | RaceTraitWhereInput[]
    OR?: RaceTraitWhereInput[]
    NOT?: RaceTraitWhereInput | RaceTraitWhereInput[]
    raceId?: BigIntFilter<"RaceTrait"> | bigint | number
    traitId?: BigIntFilter<"RaceTrait"> | bigint | number
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    trait?: XOR<TraitScalarRelationFilter, TraitWhereInput>
  }, "id">

  export type RaceTraitOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
    _count?: RaceTraitCountOrderByAggregateInput
    _avg?: RaceTraitAvgOrderByAggregateInput
    _max?: RaceTraitMaxOrderByAggregateInput
    _min?: RaceTraitMinOrderByAggregateInput
    _sum?: RaceTraitSumOrderByAggregateInput
  }

  export type RaceTraitScalarWhereWithAggregatesInput = {
    AND?: RaceTraitScalarWhereWithAggregatesInput | RaceTraitScalarWhereWithAggregatesInput[]
    OR?: RaceTraitScalarWhereWithAggregatesInput[]
    NOT?: RaceTraitScalarWhereWithAggregatesInput | RaceTraitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaceTrait"> | number
    raceId?: BigIntWithAggregatesFilter<"RaceTrait"> | bigint | number
    traitId?: BigIntWithAggregatesFilter<"RaceTrait"> | bigint | number
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: BigIntFilter<"Class"> | bigint | number
    name?: StringFilter<"Class"> | string
    caster_type?: StringFilter<"Class"> | string
    subclass?: StringFilter<"Class"> | string
    hit_dice?: StringFilter<"Class"> | string
    savingThrows?: AbilityListRelationFilter
    Character?: CharacterListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    caster_type?: SortOrder
    subclass?: SortOrder
    hit_dice?: SortOrder
    savingThrows?: AbilityOrderByRelationAggregateInput
    Character?: CharacterOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    caster_type?: StringFilter<"Class"> | string
    subclass?: StringFilter<"Class"> | string
    hit_dice?: StringFilter<"Class"> | string
    savingThrows?: AbilityListRelationFilter
    Character?: CharacterListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    caster_type?: SortOrder
    subclass?: SortOrder
    hit_dice?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Class"> | bigint | number
    name?: StringWithAggregatesFilter<"Class"> | string
    caster_type?: StringWithAggregatesFilter<"Class"> | string
    subclass?: StringWithAggregatesFilter<"Class"> | string
    hit_dice?: StringWithAggregatesFilter<"Class"> | string
  }

  export type AbilityWhereInput = {
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    id?: BigIntFilter<"Ability"> | bigint | number
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    short_desc?: StringFilter<"Ability"> | string
    skillid?: BigIntNullableFilter<"Ability"> | bigint | number | null
    skill?: XOR<SkillNullableScalarRelationFilter, SkillWhereInput> | null
    class?: ClassListRelationFilter
    CharacterAbility?: CharacterAbilityListRelationFilter
  }

  export type AbilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_desc?: SortOrder
    skillid?: SortOrderInput | SortOrder
    skill?: SkillOrderByWithRelationInput
    class?: ClassOrderByRelationAggregateInput
    CharacterAbility?: CharacterAbilityOrderByRelationAggregateInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    short_desc?: StringFilter<"Ability"> | string
    skillid?: BigIntNullableFilter<"Ability"> | bigint | number | null
    skill?: XOR<SkillNullableScalarRelationFilter, SkillWhereInput> | null
    class?: ClassListRelationFilter
    CharacterAbility?: CharacterAbilityListRelationFilter
  }, "id">

  export type AbilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_desc?: SortOrder
    skillid?: SortOrderInput | SortOrder
    _count?: AbilityCountOrderByAggregateInput
    _avg?: AbilityAvgOrderByAggregateInput
    _max?: AbilityMaxOrderByAggregateInput
    _min?: AbilityMinOrderByAggregateInput
    _sum?: AbilitySumOrderByAggregateInput
  }

  export type AbilityScalarWhereWithAggregatesInput = {
    AND?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    OR?: AbilityScalarWhereWithAggregatesInput[]
    NOT?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Ability"> | bigint | number
    name?: StringWithAggregatesFilter<"Ability"> | string
    description?: StringWithAggregatesFilter<"Ability"> | string
    short_desc?: StringWithAggregatesFilter<"Ability"> | string
    skillid?: BigIntNullableWithAggregatesFilter<"Ability"> | bigint | number | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: BigIntFilter<"Skill"> | bigint | number
    name?: StringFilter<"Skill"> | string
    description?: StringFilter<"Skill"> | string
    ability?: AbilityListRelationFilter
    playerSkill?: PlayerSkillListRelationFilter
    Background_Skill?: Background_SkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ability?: AbilityOrderByRelationAggregateInput
    playerSkill?: PlayerSkillOrderByRelationAggregateInput
    Background_Skill?: Background_SkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    description?: StringFilter<"Skill"> | string
    ability?: AbilityListRelationFilter
    playerSkill?: PlayerSkillListRelationFilter
    Background_Skill?: Background_SkillListRelationFilter
  }, "id" | "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Skill"> | bigint | number
    name?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type BackgroundWhereInput = {
    AND?: BackgroundWhereInput | BackgroundWhereInput[]
    OR?: BackgroundWhereInput[]
    NOT?: BackgroundWhereInput | BackgroundWhereInput[]
    id?: BigIntFilter<"Background"> | bigint | number
    name?: StringFilter<"Background"> | string
    description?: StringFilter<"Background"> | string
    character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
    skills?: Background_SkillListRelationFilter
  }

  export type BackgroundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    character?: CharacterOrderByWithRelationInput
    skills?: Background_SkillOrderByRelationAggregateInput
  }

  export type BackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: BackgroundWhereInput | BackgroundWhereInput[]
    OR?: BackgroundWhereInput[]
    NOT?: BackgroundWhereInput | BackgroundWhereInput[]
    name?: StringFilter<"Background"> | string
    description?: StringFilter<"Background"> | string
    character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
    skills?: Background_SkillListRelationFilter
  }, "id" | "id">

  export type BackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: BackgroundCountOrderByAggregateInput
    _avg?: BackgroundAvgOrderByAggregateInput
    _max?: BackgroundMaxOrderByAggregateInput
    _min?: BackgroundMinOrderByAggregateInput
    _sum?: BackgroundSumOrderByAggregateInput
  }

  export type BackgroundScalarWhereWithAggregatesInput = {
    AND?: BackgroundScalarWhereWithAggregatesInput | BackgroundScalarWhereWithAggregatesInput[]
    OR?: BackgroundScalarWhereWithAggregatesInput[]
    NOT?: BackgroundScalarWhereWithAggregatesInput | BackgroundScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Background"> | bigint | number
    name?: StringWithAggregatesFilter<"Background"> | string
    description?: StringWithAggregatesFilter<"Background"> | string
  }

  export type Background_SkillWhereInput = {
    AND?: Background_SkillWhereInput | Background_SkillWhereInput[]
    OR?: Background_SkillWhereInput[]
    NOT?: Background_SkillWhereInput | Background_SkillWhereInput[]
    id?: BigIntFilter<"Background_Skill"> | bigint | number
    skillId?: BigIntFilter<"Background_Skill"> | bigint | number
    backgroundId?: BigIntFilter<"Background_Skill"> | bigint | number
    skill_potential?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    background?: XOR<BackgroundScalarRelationFilter, BackgroundWhereInput>
  }

  export type Background_SkillOrderByWithRelationInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
    skill_potential?: SkillOrderByWithRelationInput
    background?: BackgroundOrderByWithRelationInput
  }

  export type Background_SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    backgroundId?: bigint | number
    AND?: Background_SkillWhereInput | Background_SkillWhereInput[]
    OR?: Background_SkillWhereInput[]
    NOT?: Background_SkillWhereInput | Background_SkillWhereInput[]
    skillId?: BigIntFilter<"Background_Skill"> | bigint | number
    skill_potential?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    background?: XOR<BackgroundScalarRelationFilter, BackgroundWhereInput>
  }, "id" | "backgroundId">

  export type Background_SkillOrderByWithAggregationInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
    _count?: Background_SkillCountOrderByAggregateInput
    _avg?: Background_SkillAvgOrderByAggregateInput
    _max?: Background_SkillMaxOrderByAggregateInput
    _min?: Background_SkillMinOrderByAggregateInput
    _sum?: Background_SkillSumOrderByAggregateInput
  }

  export type Background_SkillScalarWhereWithAggregatesInput = {
    AND?: Background_SkillScalarWhereWithAggregatesInput | Background_SkillScalarWhereWithAggregatesInput[]
    OR?: Background_SkillScalarWhereWithAggregatesInput[]
    NOT?: Background_SkillScalarWhereWithAggregatesInput | Background_SkillScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Background_Skill"> | bigint | number
    skillId?: BigIntWithAggregatesFilter<"Background_Skill"> | bigint | number
    backgroundId?: BigIntWithAggregatesFilter<"Background_Skill"> | bigint | number
  }

  export type AlignmentWhereInput = {
    AND?: AlignmentWhereInput | AlignmentWhereInput[]
    OR?: AlignmentWhereInput[]
    NOT?: AlignmentWhereInput | AlignmentWhereInput[]
    id?: BigIntFilter<"Alignment"> | bigint | number
    name?: StringFilter<"Alignment"> | string
    description?: StringFilter<"Alignment"> | string
    Character?: CharacterListRelationFilter
  }

  export type AlignmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    Character?: CharacterOrderByRelationAggregateInput
  }

  export type AlignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AlignmentWhereInput | AlignmentWhereInput[]
    OR?: AlignmentWhereInput[]
    NOT?: AlignmentWhereInput | AlignmentWhereInput[]
    name?: StringFilter<"Alignment"> | string
    description?: StringFilter<"Alignment"> | string
    Character?: CharacterListRelationFilter
  }, "id">

  export type AlignmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: AlignmentCountOrderByAggregateInput
    _avg?: AlignmentAvgOrderByAggregateInput
    _max?: AlignmentMaxOrderByAggregateInput
    _min?: AlignmentMinOrderByAggregateInput
    _sum?: AlignmentSumOrderByAggregateInput
  }

  export type AlignmentScalarWhereWithAggregatesInput = {
    AND?: AlignmentScalarWhereWithAggregatesInput | AlignmentScalarWhereWithAggregatesInput[]
    OR?: AlignmentScalarWhereWithAggregatesInput[]
    NOT?: AlignmentScalarWhereWithAggregatesInput | AlignmentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Alignment"> | bigint | number
    name?: StringWithAggregatesFilter<"Alignment"> | string
    description?: StringWithAggregatesFilter<"Alignment"> | string
  }

  export type PlayerSkillWhereInput = {
    AND?: PlayerSkillWhereInput | PlayerSkillWhereInput[]
    OR?: PlayerSkillWhereInput[]
    NOT?: PlayerSkillWhereInput | PlayerSkillWhereInput[]
    id?: BigIntFilter<"PlayerSkill"> | bigint | number
    value?: StringFilter<"PlayerSkill"> | string
    characterId?: BigIntFilter<"PlayerSkill"> | bigint | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    Skill?: SkillListRelationFilter
  }

  export type PlayerSkillOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    characterId?: SortOrder
    character?: CharacterOrderByWithRelationInput
    Skill?: SkillOrderByRelationAggregateInput
  }

  export type PlayerSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PlayerSkillWhereInput | PlayerSkillWhereInput[]
    OR?: PlayerSkillWhereInput[]
    NOT?: PlayerSkillWhereInput | PlayerSkillWhereInput[]
    value?: StringFilter<"PlayerSkill"> | string
    characterId?: BigIntFilter<"PlayerSkill"> | bigint | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    Skill?: SkillListRelationFilter
  }, "id" | "id">

  export type PlayerSkillOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    characterId?: SortOrder
    _count?: PlayerSkillCountOrderByAggregateInput
    _avg?: PlayerSkillAvgOrderByAggregateInput
    _max?: PlayerSkillMaxOrderByAggregateInput
    _min?: PlayerSkillMinOrderByAggregateInput
    _sum?: PlayerSkillSumOrderByAggregateInput
  }

  export type PlayerSkillScalarWhereWithAggregatesInput = {
    AND?: PlayerSkillScalarWhereWithAggregatesInput | PlayerSkillScalarWhereWithAggregatesInput[]
    OR?: PlayerSkillScalarWhereWithAggregatesInput[]
    NOT?: PlayerSkillScalarWhereWithAggregatesInput | PlayerSkillScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"PlayerSkill"> | bigint | number
    value?: StringWithAggregatesFilter<"PlayerSkill"> | string
    characterId?: BigIntWithAggregatesFilter<"PlayerSkill"> | bigint | number
  }

  export type SavingThrowsWhereInput = {
    AND?: SavingThrowsWhereInput | SavingThrowsWhereInput[]
    OR?: SavingThrowsWhereInput[]
    NOT?: SavingThrowsWhereInput | SavingThrowsWhereInput[]
    id?: IntFilter<"SavingThrows"> | number
    skill?: StringFilter<"SavingThrows"> | string
    character?: StringFilter<"SavingThrows"> | string
  }

  export type SavingThrowsOrderByWithRelationInput = {
    id?: SortOrder
    skill?: SortOrder
    character?: SortOrder
  }

  export type SavingThrowsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SavingThrowsWhereInput | SavingThrowsWhereInput[]
    OR?: SavingThrowsWhereInput[]
    NOT?: SavingThrowsWhereInput | SavingThrowsWhereInput[]
    skill?: StringFilter<"SavingThrows"> | string
    character?: StringFilter<"SavingThrows"> | string
  }, "id">

  export type SavingThrowsOrderByWithAggregationInput = {
    id?: SortOrder
    skill?: SortOrder
    character?: SortOrder
    _count?: SavingThrowsCountOrderByAggregateInput
    _avg?: SavingThrowsAvgOrderByAggregateInput
    _max?: SavingThrowsMaxOrderByAggregateInput
    _min?: SavingThrowsMinOrderByAggregateInput
    _sum?: SavingThrowsSumOrderByAggregateInput
  }

  export type SavingThrowsScalarWhereWithAggregatesInput = {
    AND?: SavingThrowsScalarWhereWithAggregatesInput | SavingThrowsScalarWhereWithAggregatesInput[]
    OR?: SavingThrowsScalarWhereWithAggregatesInput[]
    NOT?: SavingThrowsScalarWhereWithAggregatesInput | SavingThrowsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavingThrows"> | number
    skill?: StringWithAggregatesFilter<"SavingThrows"> | string
    character?: StringWithAggregatesFilter<"SavingThrows"> | string
  }

  export type CharacterAbilityWhereInput = {
    AND?: CharacterAbilityWhereInput | CharacterAbilityWhereInput[]
    OR?: CharacterAbilityWhereInput[]
    NOT?: CharacterAbilityWhereInput | CharacterAbilityWhereInput[]
    id?: BigIntFilter<"CharacterAbility"> | bigint | number
    characterId?: BigIntFilter<"CharacterAbility"> | bigint | number
    abilityId?: BigIntFilter<"CharacterAbility"> | bigint | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    ability?: XOR<AbilityScalarRelationFilter, AbilityWhereInput>
  }

  export type CharacterAbilityOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
    character?: CharacterOrderByWithRelationInput
    ability?: AbilityOrderByWithRelationInput
  }

  export type CharacterAbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CharacterAbilityWhereInput | CharacterAbilityWhereInput[]
    OR?: CharacterAbilityWhereInput[]
    NOT?: CharacterAbilityWhereInput | CharacterAbilityWhereInput[]
    characterId?: BigIntFilter<"CharacterAbility"> | bigint | number
    abilityId?: BigIntFilter<"CharacterAbility"> | bigint | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    ability?: XOR<AbilityScalarRelationFilter, AbilityWhereInput>
  }, "id" | "id">

  export type CharacterAbilityOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
    _count?: CharacterAbilityCountOrderByAggregateInput
    _avg?: CharacterAbilityAvgOrderByAggregateInput
    _max?: CharacterAbilityMaxOrderByAggregateInput
    _min?: CharacterAbilityMinOrderByAggregateInput
    _sum?: CharacterAbilitySumOrderByAggregateInput
  }

  export type CharacterAbilityScalarWhereWithAggregatesInput = {
    AND?: CharacterAbilityScalarWhereWithAggregatesInput | CharacterAbilityScalarWhereWithAggregatesInput[]
    OR?: CharacterAbilityScalarWhereWithAggregatesInput[]
    NOT?: CharacterAbilityScalarWhereWithAggregatesInput | CharacterAbilityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CharacterAbility"> | bigint | number
    characterId?: BigIntWithAggregatesFilter<"CharacterAbility"> | bigint | number
    abilityId?: BigIntWithAggregatesFilter<"CharacterAbility"> | bigint | number
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: BigIntFilter<"Language"> | bigint | number
    name?: StringFilter<"Language"> | string
    description?: StringFilter<"Language"> | string
    exotic?: BoolFilter<"Language"> | boolean
    characters?: CharacterLanguageListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    exotic?: SortOrder
    characters?: CharacterLanguageOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    description?: StringFilter<"Language"> | string
    exotic?: BoolFilter<"Language"> | boolean
    characters?: CharacterLanguageListRelationFilter
  }, "id">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    exotic?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Language"> | bigint | number
    name?: StringWithAggregatesFilter<"Language"> | string
    description?: StringWithAggregatesFilter<"Language"> | string
    exotic?: BoolWithAggregatesFilter<"Language"> | boolean
  }

  export type CharacterLanguageWhereInput = {
    AND?: CharacterLanguageWhereInput | CharacterLanguageWhereInput[]
    OR?: CharacterLanguageWhereInput[]
    NOT?: CharacterLanguageWhereInput | CharacterLanguageWhereInput[]
    id?: BigIntFilter<"CharacterLanguage"> | bigint | number
    characterId?: BigIntFilter<"CharacterLanguage"> | bigint | number
    languageId?: BigIntFilter<"CharacterLanguage"> | bigint | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type CharacterLanguageOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
    character?: CharacterOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type CharacterLanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CharacterLanguageWhereInput | CharacterLanguageWhereInput[]
    OR?: CharacterLanguageWhereInput[]
    NOT?: CharacterLanguageWhereInput | CharacterLanguageWhereInput[]
    characterId?: BigIntFilter<"CharacterLanguage"> | bigint | number
    languageId?: BigIntFilter<"CharacterLanguage"> | bigint | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id">

  export type CharacterLanguageOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
    _count?: CharacterLanguageCountOrderByAggregateInput
    _avg?: CharacterLanguageAvgOrderByAggregateInput
    _max?: CharacterLanguageMaxOrderByAggregateInput
    _min?: CharacterLanguageMinOrderByAggregateInput
    _sum?: CharacterLanguageSumOrderByAggregateInput
  }

  export type CharacterLanguageScalarWhereWithAggregatesInput = {
    AND?: CharacterLanguageScalarWhereWithAggregatesInput | CharacterLanguageScalarWhereWithAggregatesInput[]
    OR?: CharacterLanguageScalarWhereWithAggregatesInput[]
    NOT?: CharacterLanguageScalarWhereWithAggregatesInput | CharacterLanguageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CharacterLanguage"> | bigint | number
    characterId?: BigIntWithAggregatesFilter<"CharacterLanguage"> | bigint | number
    languageId?: BigIntWithAggregatesFilter<"CharacterLanguage"> | bigint | number
  }

  export type CharacterCreateInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    class: ClassCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type RaceCreateInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutSubrace_ofInput
    subrace_of?: RaceCreateNestedOneWithoutRaceInput
    Trait?: TraitCreateNestedManyWithoutRaceInput
    traits?: RaceTraitCreateNestedManyWithoutRaceInput
    Character?: CharacterCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    subraceOfId?: bigint | number | null
    Race?: RaceUncheckedCreateNestedManyWithoutSubrace_ofInput
    Trait?: TraitUncheckedCreateNestedManyWithoutRaceInput
    traits?: RaceTraitUncheckedCreateNestedManyWithoutRaceInput
    Character?: CharacterUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutSubrace_ofNestedInput
    subrace_of?: RaceUpdateOneWithoutRaceNestedInput
    Trait?: TraitUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUpdateManyWithoutRaceNestedInput
    Character?: CharacterUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Race?: RaceUncheckedUpdateManyWithoutSubrace_ofNestedInput
    Trait?: TraitUncheckedUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUncheckedUpdateManyWithoutRaceNestedInput
    Character?: CharacterUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    subraceOfId?: bigint | number | null
  }

  export type RaceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type TraitCreateInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutTraitInput
    races?: RaceTraitCreateNestedManyWithoutTraitInput
  }

  export type TraitUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceUncheckedCreateNestedManyWithoutTraitInput
    races?: RaceTraitUncheckedCreateNestedManyWithoutTraitInput
  }

  export type TraitUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutTraitNestedInput
    races?: RaceTraitUpdateManyWithoutTraitNestedInput
  }

  export type TraitUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUncheckedUpdateManyWithoutTraitNestedInput
    races?: RaceTraitUncheckedUpdateManyWithoutTraitNestedInput
  }

  export type TraitCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type TraitUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RaceTraitCreateInput = {
    race: RaceCreateNestedOneWithoutTraitsInput
    trait: TraitCreateNestedOneWithoutRacesInput
  }

  export type RaceTraitUncheckedCreateInput = {
    id?: number
    raceId: bigint | number
    traitId: bigint | number
  }

  export type RaceTraitUpdateInput = {
    race?: RaceUpdateOneRequiredWithoutTraitsNestedInput
    trait?: TraitUpdateOneRequiredWithoutRacesNestedInput
  }

  export type RaceTraitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    traitId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RaceTraitCreateManyInput = {
    id?: number
    raceId: bigint | number
    traitId: bigint | number
  }

  export type RaceTraitUpdateManyMutationInput = {

  }

  export type RaceTraitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    traitId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ClassCreateInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    savingThrows?: AbilityCreateNestedManyWithoutClassInput
    Character?: CharacterCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    savingThrows?: AbilityUncheckedCreateNestedManyWithoutClassInput
    Character?: CharacterUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
    savingThrows?: AbilityUpdateManyWithoutClassNestedInput
    Character?: CharacterUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
    savingThrows?: AbilityUncheckedUpdateManyWithoutClassNestedInput
    Character?: CharacterUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityCreateInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skill?: SkillCreateNestedOneWithoutAbilityInput
    class?: ClassCreateNestedManyWithoutSavingThrowsInput
    CharacterAbility?: CharacterAbilityCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skillid?: bigint | number | null
    class?: ClassUncheckedCreateNestedManyWithoutSavingThrowsInput
    CharacterAbility?: CharacterAbilityUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skill?: SkillUpdateOneWithoutAbilityNestedInput
    class?: ClassUpdateManyWithoutSavingThrowsNestedInput
    CharacterAbility?: CharacterAbilityUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skillid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    class?: ClassUncheckedUpdateManyWithoutSavingThrowsNestedInput
    CharacterAbility?: CharacterAbilityUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skillid?: bigint | number | null
  }

  export type AbilityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skillid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SkillCreateInput = {
    id?: bigint | number
    name: string
    description: string
    ability?: AbilityCreateNestedManyWithoutSkillInput
    playerSkill?: PlayerSkillCreateNestedManyWithoutSkillInput
    Background_Skill?: Background_SkillCreateNestedManyWithoutSkill_potentialInput
  }

  export type SkillUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    ability?: AbilityUncheckedCreateNestedManyWithoutSkillInput
    playerSkill?: PlayerSkillUncheckedCreateNestedManyWithoutSkillInput
    Background_Skill?: Background_SkillUncheckedCreateNestedManyWithoutSkill_potentialInput
  }

  export type SkillUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ability?: AbilityUpdateManyWithoutSkillNestedInput
    playerSkill?: PlayerSkillUpdateManyWithoutSkillNestedInput
    Background_Skill?: Background_SkillUpdateManyWithoutSkill_potentialNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ability?: AbilityUncheckedUpdateManyWithoutSkillNestedInput
    playerSkill?: PlayerSkillUncheckedUpdateManyWithoutSkillNestedInput
    Background_Skill?: Background_SkillUncheckedUpdateManyWithoutSkill_potentialNestedInput
  }

  export type SkillCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackgroundCreateInput = {
    id?: bigint | number
    name: string
    description: string
    character?: CharacterCreateNestedOneWithoutBackgroundInput
    skills?: Background_SkillCreateNestedManyWithoutBackgroundInput
  }

  export type BackgroundUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    character?: CharacterUncheckedCreateNestedOneWithoutBackgroundInput
    skills?: Background_SkillUncheckedCreateNestedManyWithoutBackgroundInput
  }

  export type BackgroundUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateOneWithoutBackgroundNestedInput
    skills?: Background_SkillUpdateManyWithoutBackgroundNestedInput
  }

  export type BackgroundUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    character?: CharacterUncheckedUpdateOneWithoutBackgroundNestedInput
    skills?: Background_SkillUncheckedUpdateManyWithoutBackgroundNestedInput
  }

  export type BackgroundCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type BackgroundUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackgroundUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Background_SkillCreateInput = {
    id?: bigint | number
    skill_potential: SkillCreateNestedOneWithoutBackground_SkillInput
    background: BackgroundCreateNestedOneWithoutSkillsInput
  }

  export type Background_SkillUncheckedCreateInput = {
    id?: bigint | number
    skillId: bigint | number
    backgroundId: bigint | number
  }

  export type Background_SkillUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_potential?: SkillUpdateOneRequiredWithoutBackground_SkillNestedInput
    background?: BackgroundUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type Background_SkillUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    skillId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Background_SkillCreateManyInput = {
    id?: bigint | number
    skillId: bigint | number
    backgroundId: bigint | number
  }

  export type Background_SkillUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Background_SkillUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    skillId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AlignmentCreateInput = {
    id?: bigint | number
    name: string
    description: string
    Character?: CharacterCreateNestedManyWithoutAlignmentInput
  }

  export type AlignmentUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    Character?: CharacterUncheckedCreateNestedManyWithoutAlignmentInput
  }

  export type AlignmentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Character?: CharacterUpdateManyWithoutAlignmentNestedInput
  }

  export type AlignmentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Character?: CharacterUncheckedUpdateManyWithoutAlignmentNestedInput
  }

  export type AlignmentCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type AlignmentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AlignmentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSkillCreateInput = {
    id?: bigint | number
    value: string
    character: CharacterCreateNestedOneWithoutPlayerSkillsInput
    Skill?: SkillCreateNestedManyWithoutPlayerSkillInput
  }

  export type PlayerSkillUncheckedCreateInput = {
    id?: bigint | number
    value: string
    characterId: bigint | number
    Skill?: SkillUncheckedCreateNestedManyWithoutPlayerSkillInput
  }

  export type PlayerSkillUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateOneRequiredWithoutPlayerSkillsNestedInput
    Skill?: SkillUpdateManyWithoutPlayerSkillNestedInput
  }

  export type PlayerSkillUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
    Skill?: SkillUncheckedUpdateManyWithoutPlayerSkillNestedInput
  }

  export type PlayerSkillCreateManyInput = {
    id?: bigint | number
    value: string
    characterId: bigint | number
  }

  export type PlayerSkillUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSkillUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SavingThrowsCreateInput = {
    id?: number
    skill: string
    character: string
  }

  export type SavingThrowsUncheckedCreateInput = {
    id?: number
    skill: string
    character: string
  }

  export type SavingThrowsUpdateInput = {
    skill?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
  }

  export type SavingThrowsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
  }

  export type SavingThrowsCreateManyInput = {
    id?: number
    skill: string
    character: string
  }

  export type SavingThrowsUpdateManyMutationInput = {
    skill?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
  }

  export type SavingThrowsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterAbilityCreateInput = {
    id?: bigint | number
    character: CharacterCreateNestedOneWithoutAbilitiesInput
    ability: AbilityCreateNestedOneWithoutCharacterAbilityInput
  }

  export type CharacterAbilityUncheckedCreateInput = {
    id?: bigint | number
    characterId: bigint | number
    abilityId: bigint | number
  }

  export type CharacterAbilityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    character?: CharacterUpdateOneRequiredWithoutAbilitiesNestedInput
    ability?: AbilityUpdateOneRequiredWithoutCharacterAbilityNestedInput
  }

  export type CharacterAbilityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
    abilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterAbilityCreateManyInput = {
    id?: bigint | number
    characterId: bigint | number
    abilityId: bigint | number
  }

  export type CharacterAbilityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterAbilityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
    abilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LanguageCreateInput = {
    id?: bigint | number
    name: string
    description: string
    exotic: boolean
    characters?: CharacterLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    exotic: boolean
    characters?: CharacterLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exotic?: BoolFieldUpdateOperationsInput | boolean
    characters?: CharacterLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exotic?: BoolFieldUpdateOperationsInput | boolean
    characters?: CharacterLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    exotic: boolean
  }

  export type LanguageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exotic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exotic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CharacterLanguageCreateInput = {
    id?: bigint | number
    character: CharacterCreateNestedOneWithoutLanguagesInput
    language: LanguageCreateNestedOneWithoutCharactersInput
  }

  export type CharacterLanguageUncheckedCreateInput = {
    id?: bigint | number
    characterId: bigint | number
    languageId: bigint | number
  }

  export type CharacterLanguageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    character?: CharacterUpdateOneRequiredWithoutLanguagesNestedInput
    language?: LanguageUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterLanguageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
    languageId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterLanguageCreateManyInput = {
    id?: bigint | number
    characterId: bigint | number
    languageId: bigint | number
  }

  export type CharacterLanguageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterLanguageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
    languageId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type BackgroundScalarRelationFilter = {
    is?: BackgroundWhereInput
    isNot?: BackgroundWhereInput
  }

  export type AlignmentScalarRelationFilter = {
    is?: AlignmentWhereInput
    isNot?: AlignmentWhereInput
  }

  export type PlayerSkillListRelationFilter = {
    every?: PlayerSkillWhereInput
    some?: PlayerSkillWhereInput
    none?: PlayerSkillWhereInput
  }

  export type CharacterAbilityListRelationFilter = {
    every?: CharacterAbilityWhereInput
    some?: CharacterAbilityWhereInput
    none?: CharacterAbilityWhereInput
  }

  export type CharacterLanguageListRelationFilter = {
    every?: CharacterLanguageWhereInput
    some?: CharacterLanguageWhereInput
    none?: CharacterLanguageWhereInput
  }

  export type PlayerSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterAbilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    name?: SortOrder
    player?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    personality?: SortOrder
    ideals?: SortOrder
    bonds?: SortOrder
    flaws?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    eyes?: SortOrder
    skin?: SortOrder
    hair?: SortOrder
    appearance?: SortOrder
    allies?: SortOrder
    backstory?: SortOrder
    treasure?: SortOrder
    traits?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    age?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    name?: SortOrder
    player?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    personality?: SortOrder
    ideals?: SortOrder
    bonds?: SortOrder
    flaws?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    eyes?: SortOrder
    skin?: SortOrder
    hair?: SortOrder
    appearance?: SortOrder
    allies?: SortOrder
    backstory?: SortOrder
    treasure?: SortOrder
    traits?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    name?: SortOrder
    player?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    personality?: SortOrder
    ideals?: SortOrder
    bonds?: SortOrder
    flaws?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    eyes?: SortOrder
    skin?: SortOrder
    hair?: SortOrder
    appearance?: SortOrder
    allies?: SortOrder
    backstory?: SortOrder
    treasure?: SortOrder
    traits?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    classId?: SortOrder
    backgroundId?: SortOrder
    alignmentId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    AC?: SortOrder
    speed?: SortOrder
    hp?: SortOrder
    max_hp?: SortOrder
    temp_hp?: SortOrder
    age?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type RaceListRelationFilter = {
    every?: RaceWhereInput
    some?: RaceWhereInput
    none?: RaceWhereInput
  }

  export type RaceNullableScalarRelationFilter = {
    is?: RaceWhereInput | null
    isNot?: RaceWhereInput | null
  }

  export type TraitListRelationFilter = {
    every?: TraitWhereInput
    some?: TraitWhereInput
    none?: TraitWhereInput
  }

  export type RaceTraitListRelationFilter = {
    every?: RaceTraitWhereInput
    some?: RaceTraitWhereInput
    none?: RaceTraitWhereInput
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TraitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceTraitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subraceOfId?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    id?: SortOrder
    subraceOfId?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subraceOfId?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subraceOfId?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    id?: SortOrder
    subraceOfId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type TraitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TraitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TraitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TraitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TraitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TraitScalarRelationFilter = {
    is?: TraitWhereInput
    isNot?: TraitWhereInput
  }

  export type RaceTraitCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
  }

  export type RaceTraitAvgOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
  }

  export type RaceTraitMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
  }

  export type RaceTraitMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
  }

  export type RaceTraitSumOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    traitId?: SortOrder
  }

  export type AbilityListRelationFilter = {
    every?: AbilityWhereInput
    some?: AbilityWhereInput
    none?: AbilityWhereInput
  }

  export type AbilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caster_type?: SortOrder
    subclass?: SortOrder
    hit_dice?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caster_type?: SortOrder
    subclass?: SortOrder
    hit_dice?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caster_type?: SortOrder
    subclass?: SortOrder
    hit_dice?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillNullableScalarRelationFilter = {
    is?: SkillWhereInput | null
    isNot?: SkillWhereInput | null
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_desc?: SortOrder
    skillid?: SortOrder
  }

  export type AbilityAvgOrderByAggregateInput = {
    id?: SortOrder
    skillid?: SortOrder
  }

  export type AbilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_desc?: SortOrder
    skillid?: SortOrder
  }

  export type AbilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_desc?: SortOrder
    skillid?: SortOrder
  }

  export type AbilitySumOrderByAggregateInput = {
    id?: SortOrder
    skillid?: SortOrder
  }

  export type Background_SkillListRelationFilter = {
    every?: Background_SkillWhereInput
    some?: Background_SkillWhereInput
    none?: Background_SkillWhereInput
  }

  export type Background_SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: CharacterWhereInput | null
    isNot?: CharacterWhereInput | null
  }

  export type BackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BackgroundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type Background_SkillCountOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
  }

  export type Background_SkillAvgOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
  }

  export type Background_SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
  }

  export type Background_SkillMinOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
  }

  export type Background_SkillSumOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    backgroundId?: SortOrder
  }

  export type AlignmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AlignmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AlignmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AlignmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerSkillCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    characterId?: SortOrder
  }

  export type PlayerSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
  }

  export type PlayerSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    characterId?: SortOrder
  }

  export type PlayerSkillMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    characterId?: SortOrder
  }

  export type PlayerSkillSumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
  }

  export type SavingThrowsCountOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    character?: SortOrder
  }

  export type SavingThrowsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SavingThrowsMaxOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    character?: SortOrder
  }

  export type SavingThrowsMinOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    character?: SortOrder
  }

  export type SavingThrowsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AbilityScalarRelationFilter = {
    is?: AbilityWhereInput
    isNot?: AbilityWhereInput
  }

  export type CharacterAbilityCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
  }

  export type CharacterAbilityAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
  }

  export type CharacterAbilityMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
  }

  export type CharacterAbilityMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
  }

  export type CharacterAbilitySumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    abilityId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    exotic?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    exotic?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    exotic?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type CharacterLanguageCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
  }

  export type CharacterLanguageAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
  }

  export type CharacterLanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
  }

  export type CharacterLanguageMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
  }

  export type CharacterLanguageSumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    languageId?: SortOrder
  }

  export type RaceCreateNestedOneWithoutCharacterInput = {
    create?: XOR<RaceCreateWithoutCharacterInput, RaceUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: RaceCreateOrConnectWithoutCharacterInput
    connect?: RaceWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutCharacterInput = {
    create?: XOR<ClassCreateWithoutCharacterInput, ClassUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCharacterInput
    connect?: ClassWhereUniqueInput
  }

  export type BackgroundCreateNestedOneWithoutCharacterInput = {
    create?: XOR<BackgroundCreateWithoutCharacterInput, BackgroundUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: BackgroundCreateOrConnectWithoutCharacterInput
    connect?: BackgroundWhereUniqueInput
  }

  export type AlignmentCreateNestedOneWithoutCharacterInput = {
    create?: XOR<AlignmentCreateWithoutCharacterInput, AlignmentUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: AlignmentCreateOrConnectWithoutCharacterInput
    connect?: AlignmentWhereUniqueInput
  }

  export type PlayerSkillCreateNestedManyWithoutCharacterInput = {
    create?: XOR<PlayerSkillCreateWithoutCharacterInput, PlayerSkillUncheckedCreateWithoutCharacterInput> | PlayerSkillCreateWithoutCharacterInput[] | PlayerSkillUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutCharacterInput | PlayerSkillCreateOrConnectWithoutCharacterInput[]
    createMany?: PlayerSkillCreateManyCharacterInputEnvelope
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
  }

  export type CharacterAbilityCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterAbilityCreateWithoutCharacterInput, CharacterAbilityUncheckedCreateWithoutCharacterInput> | CharacterAbilityCreateWithoutCharacterInput[] | CharacterAbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutCharacterInput | CharacterAbilityCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterAbilityCreateManyCharacterInputEnvelope
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
  }

  export type CharacterLanguageCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterLanguageCreateWithoutCharacterInput, CharacterLanguageUncheckedCreateWithoutCharacterInput> | CharacterLanguageCreateWithoutCharacterInput[] | CharacterLanguageUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutCharacterInput | CharacterLanguageCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterLanguageCreateManyCharacterInputEnvelope
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
  }

  export type PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<PlayerSkillCreateWithoutCharacterInput, PlayerSkillUncheckedCreateWithoutCharacterInput> | PlayerSkillCreateWithoutCharacterInput[] | PlayerSkillUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutCharacterInput | PlayerSkillCreateOrConnectWithoutCharacterInput[]
    createMany?: PlayerSkillCreateManyCharacterInputEnvelope
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
  }

  export type CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterAbilityCreateWithoutCharacterInput, CharacterAbilityUncheckedCreateWithoutCharacterInput> | CharacterAbilityCreateWithoutCharacterInput[] | CharacterAbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutCharacterInput | CharacterAbilityCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterAbilityCreateManyCharacterInputEnvelope
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
  }

  export type CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterLanguageCreateWithoutCharacterInput, CharacterLanguageUncheckedCreateWithoutCharacterInput> | CharacterLanguageCreateWithoutCharacterInput[] | CharacterLanguageUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutCharacterInput | CharacterLanguageCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterLanguageCreateManyCharacterInputEnvelope
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RaceUpdateOneRequiredWithoutCharacterNestedInput = {
    create?: XOR<RaceCreateWithoutCharacterInput, RaceUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: RaceCreateOrConnectWithoutCharacterInput
    upsert?: RaceUpsertWithoutCharacterInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutCharacterInput, RaceUpdateWithoutCharacterInput>, RaceUncheckedUpdateWithoutCharacterInput>
  }

  export type ClassUpdateOneRequiredWithoutCharacterNestedInput = {
    create?: XOR<ClassCreateWithoutCharacterInput, ClassUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCharacterInput
    upsert?: ClassUpsertWithoutCharacterInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutCharacterInput, ClassUpdateWithoutCharacterInput>, ClassUncheckedUpdateWithoutCharacterInput>
  }

  export type BackgroundUpdateOneRequiredWithoutCharacterNestedInput = {
    create?: XOR<BackgroundCreateWithoutCharacterInput, BackgroundUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: BackgroundCreateOrConnectWithoutCharacterInput
    upsert?: BackgroundUpsertWithoutCharacterInput
    connect?: BackgroundWhereUniqueInput
    update?: XOR<XOR<BackgroundUpdateToOneWithWhereWithoutCharacterInput, BackgroundUpdateWithoutCharacterInput>, BackgroundUncheckedUpdateWithoutCharacterInput>
  }

  export type AlignmentUpdateOneRequiredWithoutCharacterNestedInput = {
    create?: XOR<AlignmentCreateWithoutCharacterInput, AlignmentUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: AlignmentCreateOrConnectWithoutCharacterInput
    upsert?: AlignmentUpsertWithoutCharacterInput
    connect?: AlignmentWhereUniqueInput
    update?: XOR<XOR<AlignmentUpdateToOneWithWhereWithoutCharacterInput, AlignmentUpdateWithoutCharacterInput>, AlignmentUncheckedUpdateWithoutCharacterInput>
  }

  export type PlayerSkillUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<PlayerSkillCreateWithoutCharacterInput, PlayerSkillUncheckedCreateWithoutCharacterInput> | PlayerSkillCreateWithoutCharacterInput[] | PlayerSkillUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutCharacterInput | PlayerSkillCreateOrConnectWithoutCharacterInput[]
    upsert?: PlayerSkillUpsertWithWhereUniqueWithoutCharacterInput | PlayerSkillUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: PlayerSkillCreateManyCharacterInputEnvelope
    set?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    disconnect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    delete?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    update?: PlayerSkillUpdateWithWhereUniqueWithoutCharacterInput | PlayerSkillUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: PlayerSkillUpdateManyWithWhereWithoutCharacterInput | PlayerSkillUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: PlayerSkillScalarWhereInput | PlayerSkillScalarWhereInput[]
  }

  export type CharacterAbilityUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterAbilityCreateWithoutCharacterInput, CharacterAbilityUncheckedCreateWithoutCharacterInput> | CharacterAbilityCreateWithoutCharacterInput[] | CharacterAbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutCharacterInput | CharacterAbilityCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterAbilityUpsertWithWhereUniqueWithoutCharacterInput | CharacterAbilityUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterAbilityCreateManyCharacterInputEnvelope
    set?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    disconnect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    delete?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    update?: CharacterAbilityUpdateWithWhereUniqueWithoutCharacterInput | CharacterAbilityUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterAbilityUpdateManyWithWhereWithoutCharacterInput | CharacterAbilityUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterAbilityScalarWhereInput | CharacterAbilityScalarWhereInput[]
  }

  export type CharacterLanguageUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterLanguageCreateWithoutCharacterInput, CharacterLanguageUncheckedCreateWithoutCharacterInput> | CharacterLanguageCreateWithoutCharacterInput[] | CharacterLanguageUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutCharacterInput | CharacterLanguageCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterLanguageUpsertWithWhereUniqueWithoutCharacterInput | CharacterLanguageUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterLanguageCreateManyCharacterInputEnvelope
    set?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    disconnect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    delete?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    update?: CharacterLanguageUpdateWithWhereUniqueWithoutCharacterInput | CharacterLanguageUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterLanguageUpdateManyWithWhereWithoutCharacterInput | CharacterLanguageUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterLanguageScalarWhereInput | CharacterLanguageScalarWhereInput[]
  }

  export type PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<PlayerSkillCreateWithoutCharacterInput, PlayerSkillUncheckedCreateWithoutCharacterInput> | PlayerSkillCreateWithoutCharacterInput[] | PlayerSkillUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutCharacterInput | PlayerSkillCreateOrConnectWithoutCharacterInput[]
    upsert?: PlayerSkillUpsertWithWhereUniqueWithoutCharacterInput | PlayerSkillUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: PlayerSkillCreateManyCharacterInputEnvelope
    set?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    disconnect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    delete?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    update?: PlayerSkillUpdateWithWhereUniqueWithoutCharacterInput | PlayerSkillUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: PlayerSkillUpdateManyWithWhereWithoutCharacterInput | PlayerSkillUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: PlayerSkillScalarWhereInput | PlayerSkillScalarWhereInput[]
  }

  export type CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterAbilityCreateWithoutCharacterInput, CharacterAbilityUncheckedCreateWithoutCharacterInput> | CharacterAbilityCreateWithoutCharacterInput[] | CharacterAbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutCharacterInput | CharacterAbilityCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterAbilityUpsertWithWhereUniqueWithoutCharacterInput | CharacterAbilityUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterAbilityCreateManyCharacterInputEnvelope
    set?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    disconnect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    delete?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    update?: CharacterAbilityUpdateWithWhereUniqueWithoutCharacterInput | CharacterAbilityUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterAbilityUpdateManyWithWhereWithoutCharacterInput | CharacterAbilityUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterAbilityScalarWhereInput | CharacterAbilityScalarWhereInput[]
  }

  export type CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterLanguageCreateWithoutCharacterInput, CharacterLanguageUncheckedCreateWithoutCharacterInput> | CharacterLanguageCreateWithoutCharacterInput[] | CharacterLanguageUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutCharacterInput | CharacterLanguageCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterLanguageUpsertWithWhereUniqueWithoutCharacterInput | CharacterLanguageUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterLanguageCreateManyCharacterInputEnvelope
    set?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    disconnect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    delete?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    update?: CharacterLanguageUpdateWithWhereUniqueWithoutCharacterInput | CharacterLanguageUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterLanguageUpdateManyWithWhereWithoutCharacterInput | CharacterLanguageUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterLanguageScalarWhereInput | CharacterLanguageScalarWhereInput[]
  }

  export type RaceCreateNestedManyWithoutSubrace_ofInput = {
    create?: XOR<RaceCreateWithoutSubrace_ofInput, RaceUncheckedCreateWithoutSubrace_ofInput> | RaceCreateWithoutSubrace_ofInput[] | RaceUncheckedCreateWithoutSubrace_ofInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSubrace_ofInput | RaceCreateOrConnectWithoutSubrace_ofInput[]
    createMany?: RaceCreateManySubrace_ofInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceCreateNestedOneWithoutRaceInput = {
    create?: XOR<RaceCreateWithoutRaceInput, RaceUncheckedCreateWithoutRaceInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceInput
    connect?: RaceWhereUniqueInput
  }

  export type TraitCreateNestedManyWithoutRaceInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
  }

  export type RaceTraitCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceTraitCreateWithoutRaceInput, RaceTraitUncheckedCreateWithoutRaceInput> | RaceTraitCreateWithoutRaceInput[] | RaceTraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutRaceInput | RaceTraitCreateOrConnectWithoutRaceInput[]
    createMany?: RaceTraitCreateManyRaceInputEnvelope
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutRaceInput = {
    create?: XOR<CharacterCreateWithoutRaceInput, CharacterUncheckedCreateWithoutRaceInput> | CharacterCreateWithoutRaceInput[] | CharacterUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRaceInput | CharacterCreateOrConnectWithoutRaceInput[]
    createMany?: CharacterCreateManyRaceInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutSubrace_ofInput = {
    create?: XOR<RaceCreateWithoutSubrace_ofInput, RaceUncheckedCreateWithoutSubrace_ofInput> | RaceCreateWithoutSubrace_ofInput[] | RaceUncheckedCreateWithoutSubrace_ofInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSubrace_ofInput | RaceCreateOrConnectWithoutSubrace_ofInput[]
    createMany?: RaceCreateManySubrace_ofInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type TraitUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
  }

  export type RaceTraitUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceTraitCreateWithoutRaceInput, RaceTraitUncheckedCreateWithoutRaceInput> | RaceTraitCreateWithoutRaceInput[] | RaceTraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutRaceInput | RaceTraitCreateOrConnectWithoutRaceInput[]
    createMany?: RaceTraitCreateManyRaceInputEnvelope
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<CharacterCreateWithoutRaceInput, CharacterUncheckedCreateWithoutRaceInput> | CharacterCreateWithoutRaceInput[] | CharacterUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRaceInput | CharacterCreateOrConnectWithoutRaceInput[]
    createMany?: CharacterCreateManyRaceInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type RaceUpdateManyWithoutSubrace_ofNestedInput = {
    create?: XOR<RaceCreateWithoutSubrace_ofInput, RaceUncheckedCreateWithoutSubrace_ofInput> | RaceCreateWithoutSubrace_ofInput[] | RaceUncheckedCreateWithoutSubrace_ofInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSubrace_ofInput | RaceCreateOrConnectWithoutSubrace_ofInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutSubrace_ofInput | RaceUpsertWithWhereUniqueWithoutSubrace_ofInput[]
    createMany?: RaceCreateManySubrace_ofInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutSubrace_ofInput | RaceUpdateWithWhereUniqueWithoutSubrace_ofInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutSubrace_ofInput | RaceUpdateManyWithWhereWithoutSubrace_ofInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RaceUpdateOneWithoutRaceNestedInput = {
    create?: XOR<RaceCreateWithoutRaceInput, RaceUncheckedCreateWithoutRaceInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceInput
    upsert?: RaceUpsertWithoutRaceInput
    disconnect?: RaceWhereInput | boolean
    delete?: RaceWhereInput | boolean
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutRaceInput, RaceUpdateWithoutRaceInput>, RaceUncheckedUpdateWithoutRaceInput>
  }

  export type TraitUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    upsert?: TraitUpsertWithWhereUniqueWithoutRaceInput | TraitUpsertWithWhereUniqueWithoutRaceInput[]
    set?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    disconnect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    delete?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    update?: TraitUpdateWithWhereUniqueWithoutRaceInput | TraitUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TraitUpdateManyWithWhereWithoutRaceInput | TraitUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TraitScalarWhereInput | TraitScalarWhereInput[]
  }

  export type RaceTraitUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceTraitCreateWithoutRaceInput, RaceTraitUncheckedCreateWithoutRaceInput> | RaceTraitCreateWithoutRaceInput[] | RaceTraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutRaceInput | RaceTraitCreateOrConnectWithoutRaceInput[]
    upsert?: RaceTraitUpsertWithWhereUniqueWithoutRaceInput | RaceTraitUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceTraitCreateManyRaceInputEnvelope
    set?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    disconnect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    delete?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    update?: RaceTraitUpdateWithWhereUniqueWithoutRaceInput | RaceTraitUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceTraitUpdateManyWithWhereWithoutRaceInput | RaceTraitUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceTraitScalarWhereInput | RaceTraitScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutRaceNestedInput = {
    create?: XOR<CharacterCreateWithoutRaceInput, CharacterUncheckedCreateWithoutRaceInput> | CharacterCreateWithoutRaceInput[] | CharacterUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRaceInput | CharacterCreateOrConnectWithoutRaceInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRaceInput | CharacterUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: CharacterCreateManyRaceInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRaceInput | CharacterUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRaceInput | CharacterUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type RaceUncheckedUpdateManyWithoutSubrace_ofNestedInput = {
    create?: XOR<RaceCreateWithoutSubrace_ofInput, RaceUncheckedCreateWithoutSubrace_ofInput> | RaceCreateWithoutSubrace_ofInput[] | RaceUncheckedCreateWithoutSubrace_ofInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSubrace_ofInput | RaceCreateOrConnectWithoutSubrace_ofInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutSubrace_ofInput | RaceUpsertWithWhereUniqueWithoutSubrace_ofInput[]
    createMany?: RaceCreateManySubrace_ofInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutSubrace_ofInput | RaceUpdateWithWhereUniqueWithoutSubrace_ofInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutSubrace_ofInput | RaceUpdateManyWithWhereWithoutSubrace_ofInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type TraitUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    upsert?: TraitUpsertWithWhereUniqueWithoutRaceInput | TraitUpsertWithWhereUniqueWithoutRaceInput[]
    set?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    disconnect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    delete?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    update?: TraitUpdateWithWhereUniqueWithoutRaceInput | TraitUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TraitUpdateManyWithWhereWithoutRaceInput | TraitUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TraitScalarWhereInput | TraitScalarWhereInput[]
  }

  export type RaceTraitUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceTraitCreateWithoutRaceInput, RaceTraitUncheckedCreateWithoutRaceInput> | RaceTraitCreateWithoutRaceInput[] | RaceTraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutRaceInput | RaceTraitCreateOrConnectWithoutRaceInput[]
    upsert?: RaceTraitUpsertWithWhereUniqueWithoutRaceInput | RaceTraitUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceTraitCreateManyRaceInputEnvelope
    set?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    disconnect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    delete?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    update?: RaceTraitUpdateWithWhereUniqueWithoutRaceInput | RaceTraitUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceTraitUpdateManyWithWhereWithoutRaceInput | RaceTraitUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceTraitScalarWhereInput | RaceTraitScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<CharacterCreateWithoutRaceInput, CharacterUncheckedCreateWithoutRaceInput> | CharacterCreateWithoutRaceInput[] | CharacterUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRaceInput | CharacterCreateOrConnectWithoutRaceInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRaceInput | CharacterUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: CharacterCreateManyRaceInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRaceInput | CharacterUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRaceInput | CharacterUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type RaceCreateNestedManyWithoutTraitInput = {
    create?: XOR<RaceCreateWithoutTraitInput, RaceUncheckedCreateWithoutTraitInput> | RaceCreateWithoutTraitInput[] | RaceUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutTraitInput | RaceCreateOrConnectWithoutTraitInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceTraitCreateNestedManyWithoutTraitInput = {
    create?: XOR<RaceTraitCreateWithoutTraitInput, RaceTraitUncheckedCreateWithoutTraitInput> | RaceTraitCreateWithoutTraitInput[] | RaceTraitUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutTraitInput | RaceTraitCreateOrConnectWithoutTraitInput[]
    createMany?: RaceTraitCreateManyTraitInputEnvelope
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutTraitInput = {
    create?: XOR<RaceCreateWithoutTraitInput, RaceUncheckedCreateWithoutTraitInput> | RaceCreateWithoutTraitInput[] | RaceUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutTraitInput | RaceCreateOrConnectWithoutTraitInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceTraitUncheckedCreateNestedManyWithoutTraitInput = {
    create?: XOR<RaceTraitCreateWithoutTraitInput, RaceTraitUncheckedCreateWithoutTraitInput> | RaceTraitCreateWithoutTraitInput[] | RaceTraitUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutTraitInput | RaceTraitCreateOrConnectWithoutTraitInput[]
    createMany?: RaceTraitCreateManyTraitInputEnvelope
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
  }

  export type RaceUpdateManyWithoutTraitNestedInput = {
    create?: XOR<RaceCreateWithoutTraitInput, RaceUncheckedCreateWithoutTraitInput> | RaceCreateWithoutTraitInput[] | RaceUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutTraitInput | RaceCreateOrConnectWithoutTraitInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutTraitInput | RaceUpsertWithWhereUniqueWithoutTraitInput[]
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutTraitInput | RaceUpdateWithWhereUniqueWithoutTraitInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutTraitInput | RaceUpdateManyWithWhereWithoutTraitInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RaceTraitUpdateManyWithoutTraitNestedInput = {
    create?: XOR<RaceTraitCreateWithoutTraitInput, RaceTraitUncheckedCreateWithoutTraitInput> | RaceTraitCreateWithoutTraitInput[] | RaceTraitUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutTraitInput | RaceTraitCreateOrConnectWithoutTraitInput[]
    upsert?: RaceTraitUpsertWithWhereUniqueWithoutTraitInput | RaceTraitUpsertWithWhereUniqueWithoutTraitInput[]
    createMany?: RaceTraitCreateManyTraitInputEnvelope
    set?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    disconnect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    delete?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    update?: RaceTraitUpdateWithWhereUniqueWithoutTraitInput | RaceTraitUpdateWithWhereUniqueWithoutTraitInput[]
    updateMany?: RaceTraitUpdateManyWithWhereWithoutTraitInput | RaceTraitUpdateManyWithWhereWithoutTraitInput[]
    deleteMany?: RaceTraitScalarWhereInput | RaceTraitScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutTraitNestedInput = {
    create?: XOR<RaceCreateWithoutTraitInput, RaceUncheckedCreateWithoutTraitInput> | RaceCreateWithoutTraitInput[] | RaceUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutTraitInput | RaceCreateOrConnectWithoutTraitInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutTraitInput | RaceUpsertWithWhereUniqueWithoutTraitInput[]
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutTraitInput | RaceUpdateWithWhereUniqueWithoutTraitInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutTraitInput | RaceUpdateManyWithWhereWithoutTraitInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RaceTraitUncheckedUpdateManyWithoutTraitNestedInput = {
    create?: XOR<RaceTraitCreateWithoutTraitInput, RaceTraitUncheckedCreateWithoutTraitInput> | RaceTraitCreateWithoutTraitInput[] | RaceTraitUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: RaceTraitCreateOrConnectWithoutTraitInput | RaceTraitCreateOrConnectWithoutTraitInput[]
    upsert?: RaceTraitUpsertWithWhereUniqueWithoutTraitInput | RaceTraitUpsertWithWhereUniqueWithoutTraitInput[]
    createMany?: RaceTraitCreateManyTraitInputEnvelope
    set?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    disconnect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    delete?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    connect?: RaceTraitWhereUniqueInput | RaceTraitWhereUniqueInput[]
    update?: RaceTraitUpdateWithWhereUniqueWithoutTraitInput | RaceTraitUpdateWithWhereUniqueWithoutTraitInput[]
    updateMany?: RaceTraitUpdateManyWithWhereWithoutTraitInput | RaceTraitUpdateManyWithWhereWithoutTraitInput[]
    deleteMany?: RaceTraitScalarWhereInput | RaceTraitScalarWhereInput[]
  }

  export type RaceCreateNestedOneWithoutTraitsInput = {
    create?: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTraitsInput
    connect?: RaceWhereUniqueInput
  }

  export type TraitCreateNestedOneWithoutRacesInput = {
    create?: XOR<TraitCreateWithoutRacesInput, TraitUncheckedCreateWithoutRacesInput>
    connectOrCreate?: TraitCreateOrConnectWithoutRacesInput
    connect?: TraitWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutTraitsNestedInput = {
    create?: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTraitsInput
    upsert?: RaceUpsertWithoutTraitsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutTraitsInput, RaceUpdateWithoutTraitsInput>, RaceUncheckedUpdateWithoutTraitsInput>
  }

  export type TraitUpdateOneRequiredWithoutRacesNestedInput = {
    create?: XOR<TraitCreateWithoutRacesInput, TraitUncheckedCreateWithoutRacesInput>
    connectOrCreate?: TraitCreateOrConnectWithoutRacesInput
    upsert?: TraitUpsertWithoutRacesInput
    connect?: TraitWhereUniqueInput
    update?: XOR<XOR<TraitUpdateToOneWithWhereWithoutRacesInput, TraitUpdateWithoutRacesInput>, TraitUncheckedUpdateWithoutRacesInput>
  }

  export type AbilityCreateNestedManyWithoutClassInput = {
    create?: XOR<AbilityCreateWithoutClassInput, AbilityUncheckedCreateWithoutClassInput> | AbilityCreateWithoutClassInput[] | AbilityUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutClassInput | AbilityCreateOrConnectWithoutClassInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutClassInput = {
    create?: XOR<CharacterCreateWithoutClassInput, CharacterUncheckedCreateWithoutClassInput> | CharacterCreateWithoutClassInput[] | CharacterUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutClassInput | CharacterCreateOrConnectWithoutClassInput[]
    createMany?: CharacterCreateManyClassInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type AbilityUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AbilityCreateWithoutClassInput, AbilityUncheckedCreateWithoutClassInput> | AbilityCreateWithoutClassInput[] | AbilityUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutClassInput | AbilityCreateOrConnectWithoutClassInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<CharacterCreateWithoutClassInput, CharacterUncheckedCreateWithoutClassInput> | CharacterCreateWithoutClassInput[] | CharacterUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutClassInput | CharacterCreateOrConnectWithoutClassInput[]
    createMany?: CharacterCreateManyClassInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type AbilityUpdateManyWithoutClassNestedInput = {
    create?: XOR<AbilityCreateWithoutClassInput, AbilityUncheckedCreateWithoutClassInput> | AbilityCreateWithoutClassInput[] | AbilityUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutClassInput | AbilityCreateOrConnectWithoutClassInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutClassInput | AbilityUpsertWithWhereUniqueWithoutClassInput[]
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutClassInput | AbilityUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutClassInput | AbilityUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutClassNestedInput = {
    create?: XOR<CharacterCreateWithoutClassInput, CharacterUncheckedCreateWithoutClassInput> | CharacterCreateWithoutClassInput[] | CharacterUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutClassInput | CharacterCreateOrConnectWithoutClassInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutClassInput | CharacterUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CharacterCreateManyClassInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutClassInput | CharacterUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutClassInput | CharacterUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type AbilityUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AbilityCreateWithoutClassInput, AbilityUncheckedCreateWithoutClassInput> | AbilityCreateWithoutClassInput[] | AbilityUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutClassInput | AbilityCreateOrConnectWithoutClassInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutClassInput | AbilityUpsertWithWhereUniqueWithoutClassInput[]
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutClassInput | AbilityUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutClassInput | AbilityUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<CharacterCreateWithoutClassInput, CharacterUncheckedCreateWithoutClassInput> | CharacterCreateWithoutClassInput[] | CharacterUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutClassInput | CharacterCreateOrConnectWithoutClassInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutClassInput | CharacterUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CharacterCreateManyClassInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutClassInput | CharacterUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutClassInput | CharacterUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type SkillCreateNestedOneWithoutAbilityInput = {
    create?: XOR<SkillCreateWithoutAbilityInput, SkillUncheckedCreateWithoutAbilityInput>
    connectOrCreate?: SkillCreateOrConnectWithoutAbilityInput
    connect?: SkillWhereUniqueInput
  }

  export type ClassCreateNestedManyWithoutSavingThrowsInput = {
    create?: XOR<ClassCreateWithoutSavingThrowsInput, ClassUncheckedCreateWithoutSavingThrowsInput> | ClassCreateWithoutSavingThrowsInput[] | ClassUncheckedCreateWithoutSavingThrowsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSavingThrowsInput | ClassCreateOrConnectWithoutSavingThrowsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type CharacterAbilityCreateNestedManyWithoutAbilityInput = {
    create?: XOR<CharacterAbilityCreateWithoutAbilityInput, CharacterAbilityUncheckedCreateWithoutAbilityInput> | CharacterAbilityCreateWithoutAbilityInput[] | CharacterAbilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutAbilityInput | CharacterAbilityCreateOrConnectWithoutAbilityInput[]
    createMany?: CharacterAbilityCreateManyAbilityInputEnvelope
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutSavingThrowsInput = {
    create?: XOR<ClassCreateWithoutSavingThrowsInput, ClassUncheckedCreateWithoutSavingThrowsInput> | ClassCreateWithoutSavingThrowsInput[] | ClassUncheckedCreateWithoutSavingThrowsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSavingThrowsInput | ClassCreateOrConnectWithoutSavingThrowsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type CharacterAbilityUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: XOR<CharacterAbilityCreateWithoutAbilityInput, CharacterAbilityUncheckedCreateWithoutAbilityInput> | CharacterAbilityCreateWithoutAbilityInput[] | CharacterAbilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutAbilityInput | CharacterAbilityCreateOrConnectWithoutAbilityInput[]
    createMany?: CharacterAbilityCreateManyAbilityInputEnvelope
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
  }

  export type SkillUpdateOneWithoutAbilityNestedInput = {
    create?: XOR<SkillCreateWithoutAbilityInput, SkillUncheckedCreateWithoutAbilityInput>
    connectOrCreate?: SkillCreateOrConnectWithoutAbilityInput
    upsert?: SkillUpsertWithoutAbilityInput
    disconnect?: SkillWhereInput | boolean
    delete?: SkillWhereInput | boolean
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutAbilityInput, SkillUpdateWithoutAbilityInput>, SkillUncheckedUpdateWithoutAbilityInput>
  }

  export type ClassUpdateManyWithoutSavingThrowsNestedInput = {
    create?: XOR<ClassCreateWithoutSavingThrowsInput, ClassUncheckedCreateWithoutSavingThrowsInput> | ClassCreateWithoutSavingThrowsInput[] | ClassUncheckedCreateWithoutSavingThrowsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSavingThrowsInput | ClassCreateOrConnectWithoutSavingThrowsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutSavingThrowsInput | ClassUpsertWithWhereUniqueWithoutSavingThrowsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutSavingThrowsInput | ClassUpdateWithWhereUniqueWithoutSavingThrowsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutSavingThrowsInput | ClassUpdateManyWithWhereWithoutSavingThrowsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CharacterAbilityUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<CharacterAbilityCreateWithoutAbilityInput, CharacterAbilityUncheckedCreateWithoutAbilityInput> | CharacterAbilityCreateWithoutAbilityInput[] | CharacterAbilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutAbilityInput | CharacterAbilityCreateOrConnectWithoutAbilityInput[]
    upsert?: CharacterAbilityUpsertWithWhereUniqueWithoutAbilityInput | CharacterAbilityUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: CharacterAbilityCreateManyAbilityInputEnvelope
    set?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    disconnect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    delete?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    update?: CharacterAbilityUpdateWithWhereUniqueWithoutAbilityInput | CharacterAbilityUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: CharacterAbilityUpdateManyWithWhereWithoutAbilityInput | CharacterAbilityUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: CharacterAbilityScalarWhereInput | CharacterAbilityScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutSavingThrowsNestedInput = {
    create?: XOR<ClassCreateWithoutSavingThrowsInput, ClassUncheckedCreateWithoutSavingThrowsInput> | ClassCreateWithoutSavingThrowsInput[] | ClassUncheckedCreateWithoutSavingThrowsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSavingThrowsInput | ClassCreateOrConnectWithoutSavingThrowsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutSavingThrowsInput | ClassUpsertWithWhereUniqueWithoutSavingThrowsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutSavingThrowsInput | ClassUpdateWithWhereUniqueWithoutSavingThrowsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutSavingThrowsInput | ClassUpdateManyWithWhereWithoutSavingThrowsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CharacterAbilityUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<CharacterAbilityCreateWithoutAbilityInput, CharacterAbilityUncheckedCreateWithoutAbilityInput> | CharacterAbilityCreateWithoutAbilityInput[] | CharacterAbilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: CharacterAbilityCreateOrConnectWithoutAbilityInput | CharacterAbilityCreateOrConnectWithoutAbilityInput[]
    upsert?: CharacterAbilityUpsertWithWhereUniqueWithoutAbilityInput | CharacterAbilityUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: CharacterAbilityCreateManyAbilityInputEnvelope
    set?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    disconnect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    delete?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    connect?: CharacterAbilityWhereUniqueInput | CharacterAbilityWhereUniqueInput[]
    update?: CharacterAbilityUpdateWithWhereUniqueWithoutAbilityInput | CharacterAbilityUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: CharacterAbilityUpdateManyWithWhereWithoutAbilityInput | CharacterAbilityUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: CharacterAbilityScalarWhereInput | CharacterAbilityScalarWhereInput[]
  }

  export type AbilityCreateNestedManyWithoutSkillInput = {
    create?: XOR<AbilityCreateWithoutSkillInput, AbilityUncheckedCreateWithoutSkillInput> | AbilityCreateWithoutSkillInput[] | AbilityUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutSkillInput | AbilityCreateOrConnectWithoutSkillInput[]
    createMany?: AbilityCreateManySkillInputEnvelope
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type PlayerSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<PlayerSkillCreateWithoutSkillInput, PlayerSkillUncheckedCreateWithoutSkillInput> | PlayerSkillCreateWithoutSkillInput[] | PlayerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutSkillInput | PlayerSkillCreateOrConnectWithoutSkillInput[]
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
  }

  export type Background_SkillCreateNestedManyWithoutSkill_potentialInput = {
    create?: XOR<Background_SkillCreateWithoutSkill_potentialInput, Background_SkillUncheckedCreateWithoutSkill_potentialInput> | Background_SkillCreateWithoutSkill_potentialInput[] | Background_SkillUncheckedCreateWithoutSkill_potentialInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutSkill_potentialInput | Background_SkillCreateOrConnectWithoutSkill_potentialInput[]
    createMany?: Background_SkillCreateManySkill_potentialInputEnvelope
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
  }

  export type AbilityUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<AbilityCreateWithoutSkillInput, AbilityUncheckedCreateWithoutSkillInput> | AbilityCreateWithoutSkillInput[] | AbilityUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutSkillInput | AbilityCreateOrConnectWithoutSkillInput[]
    createMany?: AbilityCreateManySkillInputEnvelope
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type PlayerSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<PlayerSkillCreateWithoutSkillInput, PlayerSkillUncheckedCreateWithoutSkillInput> | PlayerSkillCreateWithoutSkillInput[] | PlayerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutSkillInput | PlayerSkillCreateOrConnectWithoutSkillInput[]
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
  }

  export type Background_SkillUncheckedCreateNestedManyWithoutSkill_potentialInput = {
    create?: XOR<Background_SkillCreateWithoutSkill_potentialInput, Background_SkillUncheckedCreateWithoutSkill_potentialInput> | Background_SkillCreateWithoutSkill_potentialInput[] | Background_SkillUncheckedCreateWithoutSkill_potentialInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutSkill_potentialInput | Background_SkillCreateOrConnectWithoutSkill_potentialInput[]
    createMany?: Background_SkillCreateManySkill_potentialInputEnvelope
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
  }

  export type AbilityUpdateManyWithoutSkillNestedInput = {
    create?: XOR<AbilityCreateWithoutSkillInput, AbilityUncheckedCreateWithoutSkillInput> | AbilityCreateWithoutSkillInput[] | AbilityUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutSkillInput | AbilityCreateOrConnectWithoutSkillInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutSkillInput | AbilityUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: AbilityCreateManySkillInputEnvelope
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutSkillInput | AbilityUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutSkillInput | AbilityUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type PlayerSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<PlayerSkillCreateWithoutSkillInput, PlayerSkillUncheckedCreateWithoutSkillInput> | PlayerSkillCreateWithoutSkillInput[] | PlayerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutSkillInput | PlayerSkillCreateOrConnectWithoutSkillInput[]
    upsert?: PlayerSkillUpsertWithWhereUniqueWithoutSkillInput | PlayerSkillUpsertWithWhereUniqueWithoutSkillInput[]
    set?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    disconnect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    delete?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    update?: PlayerSkillUpdateWithWhereUniqueWithoutSkillInput | PlayerSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: PlayerSkillUpdateManyWithWhereWithoutSkillInput | PlayerSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: PlayerSkillScalarWhereInput | PlayerSkillScalarWhereInput[]
  }

  export type Background_SkillUpdateManyWithoutSkill_potentialNestedInput = {
    create?: XOR<Background_SkillCreateWithoutSkill_potentialInput, Background_SkillUncheckedCreateWithoutSkill_potentialInput> | Background_SkillCreateWithoutSkill_potentialInput[] | Background_SkillUncheckedCreateWithoutSkill_potentialInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutSkill_potentialInput | Background_SkillCreateOrConnectWithoutSkill_potentialInput[]
    upsert?: Background_SkillUpsertWithWhereUniqueWithoutSkill_potentialInput | Background_SkillUpsertWithWhereUniqueWithoutSkill_potentialInput[]
    createMany?: Background_SkillCreateManySkill_potentialInputEnvelope
    set?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    disconnect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    delete?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    update?: Background_SkillUpdateWithWhereUniqueWithoutSkill_potentialInput | Background_SkillUpdateWithWhereUniqueWithoutSkill_potentialInput[]
    updateMany?: Background_SkillUpdateManyWithWhereWithoutSkill_potentialInput | Background_SkillUpdateManyWithWhereWithoutSkill_potentialInput[]
    deleteMany?: Background_SkillScalarWhereInput | Background_SkillScalarWhereInput[]
  }

  export type AbilityUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<AbilityCreateWithoutSkillInput, AbilityUncheckedCreateWithoutSkillInput> | AbilityCreateWithoutSkillInput[] | AbilityUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutSkillInput | AbilityCreateOrConnectWithoutSkillInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutSkillInput | AbilityUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: AbilityCreateManySkillInputEnvelope
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutSkillInput | AbilityUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutSkillInput | AbilityUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type PlayerSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<PlayerSkillCreateWithoutSkillInput, PlayerSkillUncheckedCreateWithoutSkillInput> | PlayerSkillCreateWithoutSkillInput[] | PlayerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PlayerSkillCreateOrConnectWithoutSkillInput | PlayerSkillCreateOrConnectWithoutSkillInput[]
    upsert?: PlayerSkillUpsertWithWhereUniqueWithoutSkillInput | PlayerSkillUpsertWithWhereUniqueWithoutSkillInput[]
    set?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    disconnect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    delete?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    connect?: PlayerSkillWhereUniqueInput | PlayerSkillWhereUniqueInput[]
    update?: PlayerSkillUpdateWithWhereUniqueWithoutSkillInput | PlayerSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: PlayerSkillUpdateManyWithWhereWithoutSkillInput | PlayerSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: PlayerSkillScalarWhereInput | PlayerSkillScalarWhereInput[]
  }

  export type Background_SkillUncheckedUpdateManyWithoutSkill_potentialNestedInput = {
    create?: XOR<Background_SkillCreateWithoutSkill_potentialInput, Background_SkillUncheckedCreateWithoutSkill_potentialInput> | Background_SkillCreateWithoutSkill_potentialInput[] | Background_SkillUncheckedCreateWithoutSkill_potentialInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutSkill_potentialInput | Background_SkillCreateOrConnectWithoutSkill_potentialInput[]
    upsert?: Background_SkillUpsertWithWhereUniqueWithoutSkill_potentialInput | Background_SkillUpsertWithWhereUniqueWithoutSkill_potentialInput[]
    createMany?: Background_SkillCreateManySkill_potentialInputEnvelope
    set?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    disconnect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    delete?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    update?: Background_SkillUpdateWithWhereUniqueWithoutSkill_potentialInput | Background_SkillUpdateWithWhereUniqueWithoutSkill_potentialInput[]
    updateMany?: Background_SkillUpdateManyWithWhereWithoutSkill_potentialInput | Background_SkillUpdateManyWithWhereWithoutSkill_potentialInput[]
    deleteMany?: Background_SkillScalarWhereInput | Background_SkillScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutBackgroundInput = {
    create?: XOR<CharacterCreateWithoutBackgroundInput, CharacterUncheckedCreateWithoutBackgroundInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutBackgroundInput
    connect?: CharacterWhereUniqueInput
  }

  export type Background_SkillCreateNestedManyWithoutBackgroundInput = {
    create?: XOR<Background_SkillCreateWithoutBackgroundInput, Background_SkillUncheckedCreateWithoutBackgroundInput> | Background_SkillCreateWithoutBackgroundInput[] | Background_SkillUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutBackgroundInput | Background_SkillCreateOrConnectWithoutBackgroundInput[]
    createMany?: Background_SkillCreateManyBackgroundInputEnvelope
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedOneWithoutBackgroundInput = {
    create?: XOR<CharacterCreateWithoutBackgroundInput, CharacterUncheckedCreateWithoutBackgroundInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutBackgroundInput
    connect?: CharacterWhereUniqueInput
  }

  export type Background_SkillUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: XOR<Background_SkillCreateWithoutBackgroundInput, Background_SkillUncheckedCreateWithoutBackgroundInput> | Background_SkillCreateWithoutBackgroundInput[] | Background_SkillUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutBackgroundInput | Background_SkillCreateOrConnectWithoutBackgroundInput[]
    createMany?: Background_SkillCreateManyBackgroundInputEnvelope
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
  }

  export type CharacterUpdateOneWithoutBackgroundNestedInput = {
    create?: XOR<CharacterCreateWithoutBackgroundInput, CharacterUncheckedCreateWithoutBackgroundInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutBackgroundInput
    upsert?: CharacterUpsertWithoutBackgroundInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutBackgroundInput, CharacterUpdateWithoutBackgroundInput>, CharacterUncheckedUpdateWithoutBackgroundInput>
  }

  export type Background_SkillUpdateManyWithoutBackgroundNestedInput = {
    create?: XOR<Background_SkillCreateWithoutBackgroundInput, Background_SkillUncheckedCreateWithoutBackgroundInput> | Background_SkillCreateWithoutBackgroundInput[] | Background_SkillUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutBackgroundInput | Background_SkillCreateOrConnectWithoutBackgroundInput[]
    upsert?: Background_SkillUpsertWithWhereUniqueWithoutBackgroundInput | Background_SkillUpsertWithWhereUniqueWithoutBackgroundInput[]
    createMany?: Background_SkillCreateManyBackgroundInputEnvelope
    set?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    disconnect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    delete?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    update?: Background_SkillUpdateWithWhereUniqueWithoutBackgroundInput | Background_SkillUpdateWithWhereUniqueWithoutBackgroundInput[]
    updateMany?: Background_SkillUpdateManyWithWhereWithoutBackgroundInput | Background_SkillUpdateManyWithWhereWithoutBackgroundInput[]
    deleteMany?: Background_SkillScalarWhereInput | Background_SkillScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateOneWithoutBackgroundNestedInput = {
    create?: XOR<CharacterCreateWithoutBackgroundInput, CharacterUncheckedCreateWithoutBackgroundInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutBackgroundInput
    upsert?: CharacterUpsertWithoutBackgroundInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutBackgroundInput, CharacterUpdateWithoutBackgroundInput>, CharacterUncheckedUpdateWithoutBackgroundInput>
  }

  export type Background_SkillUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: XOR<Background_SkillCreateWithoutBackgroundInput, Background_SkillUncheckedCreateWithoutBackgroundInput> | Background_SkillCreateWithoutBackgroundInput[] | Background_SkillUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: Background_SkillCreateOrConnectWithoutBackgroundInput | Background_SkillCreateOrConnectWithoutBackgroundInput[]
    upsert?: Background_SkillUpsertWithWhereUniqueWithoutBackgroundInput | Background_SkillUpsertWithWhereUniqueWithoutBackgroundInput[]
    createMany?: Background_SkillCreateManyBackgroundInputEnvelope
    set?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    disconnect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    delete?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    connect?: Background_SkillWhereUniqueInput | Background_SkillWhereUniqueInput[]
    update?: Background_SkillUpdateWithWhereUniqueWithoutBackgroundInput | Background_SkillUpdateWithWhereUniqueWithoutBackgroundInput[]
    updateMany?: Background_SkillUpdateManyWithWhereWithoutBackgroundInput | Background_SkillUpdateManyWithWhereWithoutBackgroundInput[]
    deleteMany?: Background_SkillScalarWhereInput | Background_SkillScalarWhereInput[]
  }

  export type SkillCreateNestedOneWithoutBackground_SkillInput = {
    create?: XOR<SkillCreateWithoutBackground_SkillInput, SkillUncheckedCreateWithoutBackground_SkillInput>
    connectOrCreate?: SkillCreateOrConnectWithoutBackground_SkillInput
    connect?: SkillWhereUniqueInput
  }

  export type BackgroundCreateNestedOneWithoutSkillsInput = {
    create?: XOR<BackgroundCreateWithoutSkillsInput, BackgroundUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: BackgroundCreateOrConnectWithoutSkillsInput
    connect?: BackgroundWhereUniqueInput
  }

  export type SkillUpdateOneRequiredWithoutBackground_SkillNestedInput = {
    create?: XOR<SkillCreateWithoutBackground_SkillInput, SkillUncheckedCreateWithoutBackground_SkillInput>
    connectOrCreate?: SkillCreateOrConnectWithoutBackground_SkillInput
    upsert?: SkillUpsertWithoutBackground_SkillInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutBackground_SkillInput, SkillUpdateWithoutBackground_SkillInput>, SkillUncheckedUpdateWithoutBackground_SkillInput>
  }

  export type BackgroundUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<BackgroundCreateWithoutSkillsInput, BackgroundUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: BackgroundCreateOrConnectWithoutSkillsInput
    upsert?: BackgroundUpsertWithoutSkillsInput
    connect?: BackgroundWhereUniqueInput
    update?: XOR<XOR<BackgroundUpdateToOneWithWhereWithoutSkillsInput, BackgroundUpdateWithoutSkillsInput>, BackgroundUncheckedUpdateWithoutSkillsInput>
  }

  export type CharacterCreateNestedManyWithoutAlignmentInput = {
    create?: XOR<CharacterCreateWithoutAlignmentInput, CharacterUncheckedCreateWithoutAlignmentInput> | CharacterCreateWithoutAlignmentInput[] | CharacterUncheckedCreateWithoutAlignmentInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAlignmentInput | CharacterCreateOrConnectWithoutAlignmentInput[]
    createMany?: CharacterCreateManyAlignmentInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutAlignmentInput = {
    create?: XOR<CharacterCreateWithoutAlignmentInput, CharacterUncheckedCreateWithoutAlignmentInput> | CharacterCreateWithoutAlignmentInput[] | CharacterUncheckedCreateWithoutAlignmentInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAlignmentInput | CharacterCreateOrConnectWithoutAlignmentInput[]
    createMany?: CharacterCreateManyAlignmentInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUpdateManyWithoutAlignmentNestedInput = {
    create?: XOR<CharacterCreateWithoutAlignmentInput, CharacterUncheckedCreateWithoutAlignmentInput> | CharacterCreateWithoutAlignmentInput[] | CharacterUncheckedCreateWithoutAlignmentInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAlignmentInput | CharacterCreateOrConnectWithoutAlignmentInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAlignmentInput | CharacterUpsertWithWhereUniqueWithoutAlignmentInput[]
    createMany?: CharacterCreateManyAlignmentInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAlignmentInput | CharacterUpdateWithWhereUniqueWithoutAlignmentInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAlignmentInput | CharacterUpdateManyWithWhereWithoutAlignmentInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutAlignmentNestedInput = {
    create?: XOR<CharacterCreateWithoutAlignmentInput, CharacterUncheckedCreateWithoutAlignmentInput> | CharacterCreateWithoutAlignmentInput[] | CharacterUncheckedCreateWithoutAlignmentInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAlignmentInput | CharacterCreateOrConnectWithoutAlignmentInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAlignmentInput | CharacterUpsertWithWhereUniqueWithoutAlignmentInput[]
    createMany?: CharacterCreateManyAlignmentInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAlignmentInput | CharacterUpdateWithWhereUniqueWithoutAlignmentInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAlignmentInput | CharacterUpdateManyWithWhereWithoutAlignmentInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutPlayerSkillsInput = {
    create?: XOR<CharacterCreateWithoutPlayerSkillsInput, CharacterUncheckedCreateWithoutPlayerSkillsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutPlayerSkillsInput
    connect?: CharacterWhereUniqueInput
  }

  export type SkillCreateNestedManyWithoutPlayerSkillInput = {
    create?: XOR<SkillCreateWithoutPlayerSkillInput, SkillUncheckedCreateWithoutPlayerSkillInput> | SkillCreateWithoutPlayerSkillInput[] | SkillUncheckedCreateWithoutPlayerSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPlayerSkillInput | SkillCreateOrConnectWithoutPlayerSkillInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutPlayerSkillInput = {
    create?: XOR<SkillCreateWithoutPlayerSkillInput, SkillUncheckedCreateWithoutPlayerSkillInput> | SkillCreateWithoutPlayerSkillInput[] | SkillUncheckedCreateWithoutPlayerSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPlayerSkillInput | SkillCreateOrConnectWithoutPlayerSkillInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CharacterUpdateOneRequiredWithoutPlayerSkillsNestedInput = {
    create?: XOR<CharacterCreateWithoutPlayerSkillsInput, CharacterUncheckedCreateWithoutPlayerSkillsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutPlayerSkillsInput
    upsert?: CharacterUpsertWithoutPlayerSkillsInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutPlayerSkillsInput, CharacterUpdateWithoutPlayerSkillsInput>, CharacterUncheckedUpdateWithoutPlayerSkillsInput>
  }

  export type SkillUpdateManyWithoutPlayerSkillNestedInput = {
    create?: XOR<SkillCreateWithoutPlayerSkillInput, SkillUncheckedCreateWithoutPlayerSkillInput> | SkillCreateWithoutPlayerSkillInput[] | SkillUncheckedCreateWithoutPlayerSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPlayerSkillInput | SkillCreateOrConnectWithoutPlayerSkillInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutPlayerSkillInput | SkillUpsertWithWhereUniqueWithoutPlayerSkillInput[]
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutPlayerSkillInput | SkillUpdateWithWhereUniqueWithoutPlayerSkillInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutPlayerSkillInput | SkillUpdateManyWithWhereWithoutPlayerSkillInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutPlayerSkillNestedInput = {
    create?: XOR<SkillCreateWithoutPlayerSkillInput, SkillUncheckedCreateWithoutPlayerSkillInput> | SkillCreateWithoutPlayerSkillInput[] | SkillUncheckedCreateWithoutPlayerSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPlayerSkillInput | SkillCreateOrConnectWithoutPlayerSkillInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutPlayerSkillInput | SkillUpsertWithWhereUniqueWithoutPlayerSkillInput[]
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutPlayerSkillInput | SkillUpdateWithWhereUniqueWithoutPlayerSkillInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutPlayerSkillInput | SkillUpdateManyWithWhereWithoutPlayerSkillInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutAbilitiesInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput
    connect?: CharacterWhereUniqueInput
  }

  export type AbilityCreateNestedOneWithoutCharacterAbilityInput = {
    create?: XOR<AbilityCreateWithoutCharacterAbilityInput, AbilityUncheckedCreateWithoutCharacterAbilityInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutCharacterAbilityInput
    connect?: AbilityWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutAbilitiesNestedInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput
    upsert?: CharacterUpsertWithoutAbilitiesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutAbilitiesInput, CharacterUpdateWithoutAbilitiesInput>, CharacterUncheckedUpdateWithoutAbilitiesInput>
  }

  export type AbilityUpdateOneRequiredWithoutCharacterAbilityNestedInput = {
    create?: XOR<AbilityCreateWithoutCharacterAbilityInput, AbilityUncheckedCreateWithoutCharacterAbilityInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutCharacterAbilityInput
    upsert?: AbilityUpsertWithoutCharacterAbilityInput
    connect?: AbilityWhereUniqueInput
    update?: XOR<XOR<AbilityUpdateToOneWithWhereWithoutCharacterAbilityInput, AbilityUpdateWithoutCharacterAbilityInput>, AbilityUncheckedUpdateWithoutCharacterAbilityInput>
  }

  export type CharacterLanguageCreateNestedManyWithoutLanguageInput = {
    create?: XOR<CharacterLanguageCreateWithoutLanguageInput, CharacterLanguageUncheckedCreateWithoutLanguageInput> | CharacterLanguageCreateWithoutLanguageInput[] | CharacterLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutLanguageInput | CharacterLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: CharacterLanguageCreateManyLanguageInputEnvelope
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
  }

  export type CharacterLanguageUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<CharacterLanguageCreateWithoutLanguageInput, CharacterLanguageUncheckedCreateWithoutLanguageInput> | CharacterLanguageCreateWithoutLanguageInput[] | CharacterLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutLanguageInput | CharacterLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: CharacterLanguageCreateManyLanguageInputEnvelope
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CharacterLanguageUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<CharacterLanguageCreateWithoutLanguageInput, CharacterLanguageUncheckedCreateWithoutLanguageInput> | CharacterLanguageCreateWithoutLanguageInput[] | CharacterLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutLanguageInput | CharacterLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: CharacterLanguageUpsertWithWhereUniqueWithoutLanguageInput | CharacterLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: CharacterLanguageCreateManyLanguageInputEnvelope
    set?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    disconnect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    delete?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    update?: CharacterLanguageUpdateWithWhereUniqueWithoutLanguageInput | CharacterLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: CharacterLanguageUpdateManyWithWhereWithoutLanguageInput | CharacterLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: CharacterLanguageScalarWhereInput | CharacterLanguageScalarWhereInput[]
  }

  export type CharacterLanguageUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<CharacterLanguageCreateWithoutLanguageInput, CharacterLanguageUncheckedCreateWithoutLanguageInput> | CharacterLanguageCreateWithoutLanguageInput[] | CharacterLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CharacterLanguageCreateOrConnectWithoutLanguageInput | CharacterLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: CharacterLanguageUpsertWithWhereUniqueWithoutLanguageInput | CharacterLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: CharacterLanguageCreateManyLanguageInputEnvelope
    set?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    disconnect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    delete?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    connect?: CharacterLanguageWhereUniqueInput | CharacterLanguageWhereUniqueInput[]
    update?: CharacterLanguageUpdateWithWhereUniqueWithoutLanguageInput | CharacterLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: CharacterLanguageUpdateManyWithWhereWithoutLanguageInput | CharacterLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: CharacterLanguageScalarWhereInput | CharacterLanguageScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<CharacterCreateWithoutLanguagesInput, CharacterUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutLanguagesInput
    connect?: CharacterWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutCharactersInput = {
    create?: XOR<LanguageCreateWithoutCharactersInput, LanguageUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutCharactersInput
    connect?: LanguageWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<CharacterCreateWithoutLanguagesInput, CharacterUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutLanguagesInput
    upsert?: CharacterUpsertWithoutLanguagesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutLanguagesInput, CharacterUpdateWithoutLanguagesInput>, CharacterUncheckedUpdateWithoutLanguagesInput>
  }

  export type LanguageUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<LanguageCreateWithoutCharactersInput, LanguageUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutCharactersInput
    upsert?: LanguageUpsertWithoutCharactersInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutCharactersInput, LanguageUpdateWithoutCharactersInput>, LanguageUncheckedUpdateWithoutCharactersInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RaceCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutSubrace_ofInput
    subrace_of?: RaceCreateNestedOneWithoutRaceInput
    Trait?: TraitCreateNestedManyWithoutRaceInput
    traits?: RaceTraitCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    description: string
    subraceOfId?: bigint | number | null
    Race?: RaceUncheckedCreateNestedManyWithoutSubrace_ofInput
    Trait?: TraitUncheckedCreateNestedManyWithoutRaceInput
    traits?: RaceTraitUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutCharacterInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutCharacterInput, RaceUncheckedCreateWithoutCharacterInput>
  }

  export type ClassCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    savingThrows?: AbilityCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    savingThrows?: AbilityUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCharacterInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCharacterInput, ClassUncheckedCreateWithoutCharacterInput>
  }

  export type BackgroundCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    description: string
    skills?: Background_SkillCreateNestedManyWithoutBackgroundInput
  }

  export type BackgroundUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    description: string
    skills?: Background_SkillUncheckedCreateNestedManyWithoutBackgroundInput
  }

  export type BackgroundCreateOrConnectWithoutCharacterInput = {
    where: BackgroundWhereUniqueInput
    create: XOR<BackgroundCreateWithoutCharacterInput, BackgroundUncheckedCreateWithoutCharacterInput>
  }

  export type AlignmentCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type AlignmentUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type AlignmentCreateOrConnectWithoutCharacterInput = {
    where: AlignmentWhereUniqueInput
    create: XOR<AlignmentCreateWithoutCharacterInput, AlignmentUncheckedCreateWithoutCharacterInput>
  }

  export type PlayerSkillCreateWithoutCharacterInput = {
    id?: bigint | number
    value: string
    Skill?: SkillCreateNestedManyWithoutPlayerSkillInput
  }

  export type PlayerSkillUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    value: string
    Skill?: SkillUncheckedCreateNestedManyWithoutPlayerSkillInput
  }

  export type PlayerSkillCreateOrConnectWithoutCharacterInput = {
    where: PlayerSkillWhereUniqueInput
    create: XOR<PlayerSkillCreateWithoutCharacterInput, PlayerSkillUncheckedCreateWithoutCharacterInput>
  }

  export type PlayerSkillCreateManyCharacterInputEnvelope = {
    data: PlayerSkillCreateManyCharacterInput | PlayerSkillCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type CharacterAbilityCreateWithoutCharacterInput = {
    id?: bigint | number
    ability: AbilityCreateNestedOneWithoutCharacterAbilityInput
  }

  export type CharacterAbilityUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    abilityId: bigint | number
  }

  export type CharacterAbilityCreateOrConnectWithoutCharacterInput = {
    where: CharacterAbilityWhereUniqueInput
    create: XOR<CharacterAbilityCreateWithoutCharacterInput, CharacterAbilityUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterAbilityCreateManyCharacterInputEnvelope = {
    data: CharacterAbilityCreateManyCharacterInput | CharacterAbilityCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type CharacterLanguageCreateWithoutCharacterInput = {
    id?: bigint | number
    language: LanguageCreateNestedOneWithoutCharactersInput
  }

  export type CharacterLanguageUncheckedCreateWithoutCharacterInput = {
    id?: bigint | number
    languageId: bigint | number
  }

  export type CharacterLanguageCreateOrConnectWithoutCharacterInput = {
    where: CharacterLanguageWhereUniqueInput
    create: XOR<CharacterLanguageCreateWithoutCharacterInput, CharacterLanguageUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterLanguageCreateManyCharacterInputEnvelope = {
    data: CharacterLanguageCreateManyCharacterInput | CharacterLanguageCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type RaceUpsertWithoutCharacterInput = {
    update: XOR<RaceUpdateWithoutCharacterInput, RaceUncheckedUpdateWithoutCharacterInput>
    create: XOR<RaceCreateWithoutCharacterInput, RaceUncheckedCreateWithoutCharacterInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutCharacterInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutCharacterInput, RaceUncheckedUpdateWithoutCharacterInput>
  }

  export type RaceUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutSubrace_ofNestedInput
    subrace_of?: RaceUpdateOneWithoutRaceNestedInput
    Trait?: TraitUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Race?: RaceUncheckedUpdateManyWithoutSubrace_ofNestedInput
    Trait?: TraitUncheckedUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type ClassUpsertWithoutCharacterInput = {
    update: XOR<ClassUpdateWithoutCharacterInput, ClassUncheckedUpdateWithoutCharacterInput>
    create: XOR<ClassCreateWithoutCharacterInput, ClassUncheckedCreateWithoutCharacterInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutCharacterInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutCharacterInput, ClassUncheckedUpdateWithoutCharacterInput>
  }

  export type ClassUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
    savingThrows?: AbilityUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
    savingThrows?: AbilityUncheckedUpdateManyWithoutClassNestedInput
  }

  export type BackgroundUpsertWithoutCharacterInput = {
    update: XOR<BackgroundUpdateWithoutCharacterInput, BackgroundUncheckedUpdateWithoutCharacterInput>
    create: XOR<BackgroundCreateWithoutCharacterInput, BackgroundUncheckedCreateWithoutCharacterInput>
    where?: BackgroundWhereInput
  }

  export type BackgroundUpdateToOneWithWhereWithoutCharacterInput = {
    where?: BackgroundWhereInput
    data: XOR<BackgroundUpdateWithoutCharacterInput, BackgroundUncheckedUpdateWithoutCharacterInput>
  }

  export type BackgroundUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: Background_SkillUpdateManyWithoutBackgroundNestedInput
  }

  export type BackgroundUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: Background_SkillUncheckedUpdateManyWithoutBackgroundNestedInput
  }

  export type AlignmentUpsertWithoutCharacterInput = {
    update: XOR<AlignmentUpdateWithoutCharacterInput, AlignmentUncheckedUpdateWithoutCharacterInput>
    create: XOR<AlignmentCreateWithoutCharacterInput, AlignmentUncheckedCreateWithoutCharacterInput>
    where?: AlignmentWhereInput
  }

  export type AlignmentUpdateToOneWithWhereWithoutCharacterInput = {
    where?: AlignmentWhereInput
    data: XOR<AlignmentUpdateWithoutCharacterInput, AlignmentUncheckedUpdateWithoutCharacterInput>
  }

  export type AlignmentUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AlignmentUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSkillUpsertWithWhereUniqueWithoutCharacterInput = {
    where: PlayerSkillWhereUniqueInput
    update: XOR<PlayerSkillUpdateWithoutCharacterInput, PlayerSkillUncheckedUpdateWithoutCharacterInput>
    create: XOR<PlayerSkillCreateWithoutCharacterInput, PlayerSkillUncheckedCreateWithoutCharacterInput>
  }

  export type PlayerSkillUpdateWithWhereUniqueWithoutCharacterInput = {
    where: PlayerSkillWhereUniqueInput
    data: XOR<PlayerSkillUpdateWithoutCharacterInput, PlayerSkillUncheckedUpdateWithoutCharacterInput>
  }

  export type PlayerSkillUpdateManyWithWhereWithoutCharacterInput = {
    where: PlayerSkillScalarWhereInput
    data: XOR<PlayerSkillUpdateManyMutationInput, PlayerSkillUncheckedUpdateManyWithoutCharacterInput>
  }

  export type PlayerSkillScalarWhereInput = {
    AND?: PlayerSkillScalarWhereInput | PlayerSkillScalarWhereInput[]
    OR?: PlayerSkillScalarWhereInput[]
    NOT?: PlayerSkillScalarWhereInput | PlayerSkillScalarWhereInput[]
    id?: BigIntFilter<"PlayerSkill"> | bigint | number
    value?: StringFilter<"PlayerSkill"> | string
    characterId?: BigIntFilter<"PlayerSkill"> | bigint | number
  }

  export type CharacterAbilityUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterAbilityWhereUniqueInput
    update: XOR<CharacterAbilityUpdateWithoutCharacterInput, CharacterAbilityUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterAbilityCreateWithoutCharacterInput, CharacterAbilityUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterAbilityUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterAbilityWhereUniqueInput
    data: XOR<CharacterAbilityUpdateWithoutCharacterInput, CharacterAbilityUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterAbilityUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterAbilityScalarWhereInput
    data: XOR<CharacterAbilityUpdateManyMutationInput, CharacterAbilityUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterAbilityScalarWhereInput = {
    AND?: CharacterAbilityScalarWhereInput | CharacterAbilityScalarWhereInput[]
    OR?: CharacterAbilityScalarWhereInput[]
    NOT?: CharacterAbilityScalarWhereInput | CharacterAbilityScalarWhereInput[]
    id?: BigIntFilter<"CharacterAbility"> | bigint | number
    characterId?: BigIntFilter<"CharacterAbility"> | bigint | number
    abilityId?: BigIntFilter<"CharacterAbility"> | bigint | number
  }

  export type CharacterLanguageUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterLanguageWhereUniqueInput
    update: XOR<CharacterLanguageUpdateWithoutCharacterInput, CharacterLanguageUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterLanguageCreateWithoutCharacterInput, CharacterLanguageUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterLanguageUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterLanguageWhereUniqueInput
    data: XOR<CharacterLanguageUpdateWithoutCharacterInput, CharacterLanguageUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterLanguageUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterLanguageScalarWhereInput
    data: XOR<CharacterLanguageUpdateManyMutationInput, CharacterLanguageUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterLanguageScalarWhereInput = {
    AND?: CharacterLanguageScalarWhereInput | CharacterLanguageScalarWhereInput[]
    OR?: CharacterLanguageScalarWhereInput[]
    NOT?: CharacterLanguageScalarWhereInput | CharacterLanguageScalarWhereInput[]
    id?: BigIntFilter<"CharacterLanguage"> | bigint | number
    characterId?: BigIntFilter<"CharacterLanguage"> | bigint | number
    languageId?: BigIntFilter<"CharacterLanguage"> | bigint | number
  }

  export type RaceCreateWithoutSubrace_ofInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutSubrace_ofInput
    Trait?: TraitCreateNestedManyWithoutRaceInput
    traits?: RaceTraitCreateNestedManyWithoutRaceInput
    Character?: CharacterCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutSubrace_ofInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceUncheckedCreateNestedManyWithoutSubrace_ofInput
    Trait?: TraitUncheckedCreateNestedManyWithoutRaceInput
    traits?: RaceTraitUncheckedCreateNestedManyWithoutRaceInput
    Character?: CharacterUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutSubrace_ofInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutSubrace_ofInput, RaceUncheckedCreateWithoutSubrace_ofInput>
  }

  export type RaceCreateManySubrace_ofInputEnvelope = {
    data: RaceCreateManySubrace_ofInput | RaceCreateManySubrace_ofInput[]
    skipDuplicates?: boolean
  }

  export type RaceCreateWithoutRaceInput = {
    id?: bigint | number
    name: string
    description: string
    subrace_of?: RaceCreateNestedOneWithoutRaceInput
    Trait?: TraitCreateNestedManyWithoutRaceInput
    traits?: RaceTraitCreateNestedManyWithoutRaceInput
    Character?: CharacterCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutRaceInput = {
    id?: bigint | number
    name: string
    description: string
    subraceOfId?: bigint | number | null
    Trait?: TraitUncheckedCreateNestedManyWithoutRaceInput
    traits?: RaceTraitUncheckedCreateNestedManyWithoutRaceInput
    Character?: CharacterUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutRaceInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutRaceInput, RaceUncheckedCreateWithoutRaceInput>
  }

  export type TraitCreateWithoutRaceInput = {
    id?: bigint | number
    name: string
    description: string
    races?: RaceTraitCreateNestedManyWithoutTraitInput
  }

  export type TraitUncheckedCreateWithoutRaceInput = {
    id?: bigint | number
    name: string
    description: string
    races?: RaceTraitUncheckedCreateNestedManyWithoutTraitInput
  }

  export type TraitCreateOrConnectWithoutRaceInput = {
    where: TraitWhereUniqueInput
    create: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput>
  }

  export type RaceTraitCreateWithoutRaceInput = {
    trait: TraitCreateNestedOneWithoutRacesInput
  }

  export type RaceTraitUncheckedCreateWithoutRaceInput = {
    id?: number
    traitId: bigint | number
  }

  export type RaceTraitCreateOrConnectWithoutRaceInput = {
    where: RaceTraitWhereUniqueInput
    create: XOR<RaceTraitCreateWithoutRaceInput, RaceTraitUncheckedCreateWithoutRaceInput>
  }

  export type RaceTraitCreateManyRaceInputEnvelope = {
    data: RaceTraitCreateManyRaceInput | RaceTraitCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type CharacterCreateWithoutRaceInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    class: ClassCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutRaceInput = {
    id?: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutRaceInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutRaceInput, CharacterUncheckedCreateWithoutRaceInput>
  }

  export type CharacterCreateManyRaceInputEnvelope = {
    data: CharacterCreateManyRaceInput | CharacterCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type RaceUpsertWithWhereUniqueWithoutSubrace_ofInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutSubrace_ofInput, RaceUncheckedUpdateWithoutSubrace_ofInput>
    create: XOR<RaceCreateWithoutSubrace_ofInput, RaceUncheckedCreateWithoutSubrace_ofInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutSubrace_ofInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutSubrace_ofInput, RaceUncheckedUpdateWithoutSubrace_ofInput>
  }

  export type RaceUpdateManyWithWhereWithoutSubrace_ofInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutSubrace_ofInput>
  }

  export type RaceScalarWhereInput = {
    AND?: RaceScalarWhereInput | RaceScalarWhereInput[]
    OR?: RaceScalarWhereInput[]
    NOT?: RaceScalarWhereInput | RaceScalarWhereInput[]
    id?: BigIntFilter<"Race"> | bigint | number
    name?: StringFilter<"Race"> | string
    description?: StringFilter<"Race"> | string
    subraceOfId?: BigIntNullableFilter<"Race"> | bigint | number | null
  }

  export type RaceUpsertWithoutRaceInput = {
    update: XOR<RaceUpdateWithoutRaceInput, RaceUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceCreateWithoutRaceInput, RaceUncheckedCreateWithoutRaceInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutRaceInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutRaceInput, RaceUncheckedUpdateWithoutRaceInput>
  }

  export type RaceUpdateWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subrace_of?: RaceUpdateOneWithoutRaceNestedInput
    Trait?: TraitUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUpdateManyWithoutRaceNestedInput
    Character?: CharacterUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Trait?: TraitUncheckedUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUncheckedUpdateManyWithoutRaceNestedInput
    Character?: CharacterUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type TraitUpsertWithWhereUniqueWithoutRaceInput = {
    where: TraitWhereUniqueInput
    update: XOR<TraitUpdateWithoutRaceInput, TraitUncheckedUpdateWithoutRaceInput>
    create: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput>
  }

  export type TraitUpdateWithWhereUniqueWithoutRaceInput = {
    where: TraitWhereUniqueInput
    data: XOR<TraitUpdateWithoutRaceInput, TraitUncheckedUpdateWithoutRaceInput>
  }

  export type TraitUpdateManyWithWhereWithoutRaceInput = {
    where: TraitScalarWhereInput
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyWithoutRaceInput>
  }

  export type TraitScalarWhereInput = {
    AND?: TraitScalarWhereInput | TraitScalarWhereInput[]
    OR?: TraitScalarWhereInput[]
    NOT?: TraitScalarWhereInput | TraitScalarWhereInput[]
    id?: BigIntFilter<"Trait"> | bigint | number
    name?: StringFilter<"Trait"> | string
    description?: StringFilter<"Trait"> | string
  }

  export type RaceTraitUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceTraitWhereUniqueInput
    update: XOR<RaceTraitUpdateWithoutRaceInput, RaceTraitUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceTraitCreateWithoutRaceInput, RaceTraitUncheckedCreateWithoutRaceInput>
  }

  export type RaceTraitUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceTraitWhereUniqueInput
    data: XOR<RaceTraitUpdateWithoutRaceInput, RaceTraitUncheckedUpdateWithoutRaceInput>
  }

  export type RaceTraitUpdateManyWithWhereWithoutRaceInput = {
    where: RaceTraitScalarWhereInput
    data: XOR<RaceTraitUpdateManyMutationInput, RaceTraitUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceTraitScalarWhereInput = {
    AND?: RaceTraitScalarWhereInput | RaceTraitScalarWhereInput[]
    OR?: RaceTraitScalarWhereInput[]
    NOT?: RaceTraitScalarWhereInput | RaceTraitScalarWhereInput[]
    id?: IntFilter<"RaceTrait"> | number
    raceId?: BigIntFilter<"RaceTrait"> | bigint | number
    traitId?: BigIntFilter<"RaceTrait"> | bigint | number
  }

  export type CharacterUpsertWithWhereUniqueWithoutRaceInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutRaceInput, CharacterUncheckedUpdateWithoutRaceInput>
    create: XOR<CharacterCreateWithoutRaceInput, CharacterUncheckedCreateWithoutRaceInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutRaceInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutRaceInput, CharacterUncheckedUpdateWithoutRaceInput>
  }

  export type CharacterUpdateManyWithWhereWithoutRaceInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutRaceInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: BigIntFilter<"Character"> | bigint | number
    raceId?: BigIntFilter<"Character"> | bigint | number
    classId?: BigIntFilter<"Character"> | bigint | number
    backgroundId?: BigIntFilter<"Character"> | bigint | number
    alignmentId?: BigIntFilter<"Character"> | bigint | number
    xp?: IntFilter<"Character"> | number
    level?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    player?: StringFilter<"Character"> | string
    AC?: IntFilter<"Character"> | number
    speed?: IntFilter<"Character"> | number
    hp?: IntFilter<"Character"> | number
    max_hp?: IntFilter<"Character"> | number
    temp_hp?: IntFilter<"Character"> | number
    personality?: StringFilter<"Character"> | string
    ideals?: StringFilter<"Character"> | string
    bonds?: StringFilter<"Character"> | string
    flaws?: StringFilter<"Character"> | string
    age?: IntFilter<"Character"> | number
    height?: StringFilter<"Character"> | string
    weight?: StringFilter<"Character"> | string
    eyes?: StringFilter<"Character"> | string
    skin?: StringFilter<"Character"> | string
    hair?: StringFilter<"Character"> | string
    appearance?: StringFilter<"Character"> | string
    allies?: StringFilter<"Character"> | string
    backstory?: StringFilter<"Character"> | string
    treasure?: StringFilter<"Character"> | string
    traits?: StringFilter<"Character"> | string
  }

  export type RaceCreateWithoutTraitInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutSubrace_ofInput
    subrace_of?: RaceCreateNestedOneWithoutRaceInput
    traits?: RaceTraitCreateNestedManyWithoutRaceInput
    Character?: CharacterCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutTraitInput = {
    id?: bigint | number
    name: string
    description: string
    subraceOfId?: bigint | number | null
    Race?: RaceUncheckedCreateNestedManyWithoutSubrace_ofInput
    traits?: RaceTraitUncheckedCreateNestedManyWithoutRaceInput
    Character?: CharacterUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutTraitInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutTraitInput, RaceUncheckedCreateWithoutTraitInput>
  }

  export type RaceTraitCreateWithoutTraitInput = {
    race: RaceCreateNestedOneWithoutTraitsInput
  }

  export type RaceTraitUncheckedCreateWithoutTraitInput = {
    id?: number
    raceId: bigint | number
  }

  export type RaceTraitCreateOrConnectWithoutTraitInput = {
    where: RaceTraitWhereUniqueInput
    create: XOR<RaceTraitCreateWithoutTraitInput, RaceTraitUncheckedCreateWithoutTraitInput>
  }

  export type RaceTraitCreateManyTraitInputEnvelope = {
    data: RaceTraitCreateManyTraitInput | RaceTraitCreateManyTraitInput[]
    skipDuplicates?: boolean
  }

  export type RaceUpsertWithWhereUniqueWithoutTraitInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutTraitInput, RaceUncheckedUpdateWithoutTraitInput>
    create: XOR<RaceCreateWithoutTraitInput, RaceUncheckedCreateWithoutTraitInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutTraitInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutTraitInput, RaceUncheckedUpdateWithoutTraitInput>
  }

  export type RaceUpdateManyWithWhereWithoutTraitInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutTraitInput>
  }

  export type RaceTraitUpsertWithWhereUniqueWithoutTraitInput = {
    where: RaceTraitWhereUniqueInput
    update: XOR<RaceTraitUpdateWithoutTraitInput, RaceTraitUncheckedUpdateWithoutTraitInput>
    create: XOR<RaceTraitCreateWithoutTraitInput, RaceTraitUncheckedCreateWithoutTraitInput>
  }

  export type RaceTraitUpdateWithWhereUniqueWithoutTraitInput = {
    where: RaceTraitWhereUniqueInput
    data: XOR<RaceTraitUpdateWithoutTraitInput, RaceTraitUncheckedUpdateWithoutTraitInput>
  }

  export type RaceTraitUpdateManyWithWhereWithoutTraitInput = {
    where: RaceTraitScalarWhereInput
    data: XOR<RaceTraitUpdateManyMutationInput, RaceTraitUncheckedUpdateManyWithoutTraitInput>
  }

  export type RaceCreateWithoutTraitsInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutSubrace_ofInput
    subrace_of?: RaceCreateNestedOneWithoutRaceInput
    Trait?: TraitCreateNestedManyWithoutRaceInput
    Character?: CharacterCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutTraitsInput = {
    id?: bigint | number
    name: string
    description: string
    subraceOfId?: bigint | number | null
    Race?: RaceUncheckedCreateNestedManyWithoutSubrace_ofInput
    Trait?: TraitUncheckedCreateNestedManyWithoutRaceInput
    Character?: CharacterUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutTraitsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
  }

  export type TraitCreateWithoutRacesInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceCreateNestedManyWithoutTraitInput
  }

  export type TraitUncheckedCreateWithoutRacesInput = {
    id?: bigint | number
    name: string
    description: string
    Race?: RaceUncheckedCreateNestedManyWithoutTraitInput
  }

  export type TraitCreateOrConnectWithoutRacesInput = {
    where: TraitWhereUniqueInput
    create: XOR<TraitCreateWithoutRacesInput, TraitUncheckedCreateWithoutRacesInput>
  }

  export type RaceUpsertWithoutTraitsInput = {
    update: XOR<RaceUpdateWithoutTraitsInput, RaceUncheckedUpdateWithoutTraitsInput>
    create: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutTraitsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutTraitsInput, RaceUncheckedUpdateWithoutTraitsInput>
  }

  export type RaceUpdateWithoutTraitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutSubrace_ofNestedInput
    subrace_of?: RaceUpdateOneWithoutRaceNestedInput
    Trait?: TraitUpdateManyWithoutRaceNestedInput
    Character?: CharacterUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutTraitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Race?: RaceUncheckedUpdateManyWithoutSubrace_ofNestedInput
    Trait?: TraitUncheckedUpdateManyWithoutRaceNestedInput
    Character?: CharacterUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type TraitUpsertWithoutRacesInput = {
    update: XOR<TraitUpdateWithoutRacesInput, TraitUncheckedUpdateWithoutRacesInput>
    create: XOR<TraitCreateWithoutRacesInput, TraitUncheckedCreateWithoutRacesInput>
    where?: TraitWhereInput
  }

  export type TraitUpdateToOneWithWhereWithoutRacesInput = {
    where?: TraitWhereInput
    data: XOR<TraitUpdateWithoutRacesInput, TraitUncheckedUpdateWithoutRacesInput>
  }

  export type TraitUpdateWithoutRacesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutTraitNestedInput
  }

  export type TraitUncheckedUpdateWithoutRacesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUncheckedUpdateManyWithoutTraitNestedInput
  }

  export type AbilityCreateWithoutClassInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skill?: SkillCreateNestedOneWithoutAbilityInput
    CharacterAbility?: CharacterAbilityCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skillid?: bigint | number | null
    CharacterAbility?: CharacterAbilityUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityCreateOrConnectWithoutClassInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutClassInput, AbilityUncheckedCreateWithoutClassInput>
  }

  export type CharacterCreateWithoutClassInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    raceId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutClassInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutClassInput, CharacterUncheckedCreateWithoutClassInput>
  }

  export type CharacterCreateManyClassInputEnvelope = {
    data: CharacterCreateManyClassInput | CharacterCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AbilityUpsertWithWhereUniqueWithoutClassInput = {
    where: AbilityWhereUniqueInput
    update: XOR<AbilityUpdateWithoutClassInput, AbilityUncheckedUpdateWithoutClassInput>
    create: XOR<AbilityCreateWithoutClassInput, AbilityUncheckedCreateWithoutClassInput>
  }

  export type AbilityUpdateWithWhereUniqueWithoutClassInput = {
    where: AbilityWhereUniqueInput
    data: XOR<AbilityUpdateWithoutClassInput, AbilityUncheckedUpdateWithoutClassInput>
  }

  export type AbilityUpdateManyWithWhereWithoutClassInput = {
    where: AbilityScalarWhereInput
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyWithoutClassInput>
  }

  export type AbilityScalarWhereInput = {
    AND?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
    OR?: AbilityScalarWhereInput[]
    NOT?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
    id?: BigIntFilter<"Ability"> | bigint | number
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    short_desc?: StringFilter<"Ability"> | string
    skillid?: BigIntNullableFilter<"Ability"> | bigint | number | null
  }

  export type CharacterUpsertWithWhereUniqueWithoutClassInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutClassInput, CharacterUncheckedUpdateWithoutClassInput>
    create: XOR<CharacterCreateWithoutClassInput, CharacterUncheckedCreateWithoutClassInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutClassInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutClassInput, CharacterUncheckedUpdateWithoutClassInput>
  }

  export type CharacterUpdateManyWithWhereWithoutClassInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutClassInput>
  }

  export type SkillCreateWithoutAbilityInput = {
    id?: bigint | number
    name: string
    description: string
    playerSkill?: PlayerSkillCreateNestedManyWithoutSkillInput
    Background_Skill?: Background_SkillCreateNestedManyWithoutSkill_potentialInput
  }

  export type SkillUncheckedCreateWithoutAbilityInput = {
    id?: bigint | number
    name: string
    description: string
    playerSkill?: PlayerSkillUncheckedCreateNestedManyWithoutSkillInput
    Background_Skill?: Background_SkillUncheckedCreateNestedManyWithoutSkill_potentialInput
  }

  export type SkillCreateOrConnectWithoutAbilityInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutAbilityInput, SkillUncheckedCreateWithoutAbilityInput>
  }

  export type ClassCreateWithoutSavingThrowsInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    Character?: CharacterCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSavingThrowsInput = {
    id?: bigint | number
    name: string
    caster_type: string
    subclass: string
    hit_dice: string
    Character?: CharacterUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSavingThrowsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSavingThrowsInput, ClassUncheckedCreateWithoutSavingThrowsInput>
  }

  export type CharacterAbilityCreateWithoutAbilityInput = {
    id?: bigint | number
    character: CharacterCreateNestedOneWithoutAbilitiesInput
  }

  export type CharacterAbilityUncheckedCreateWithoutAbilityInput = {
    id?: bigint | number
    characterId: bigint | number
  }

  export type CharacterAbilityCreateOrConnectWithoutAbilityInput = {
    where: CharacterAbilityWhereUniqueInput
    create: XOR<CharacterAbilityCreateWithoutAbilityInput, CharacterAbilityUncheckedCreateWithoutAbilityInput>
  }

  export type CharacterAbilityCreateManyAbilityInputEnvelope = {
    data: CharacterAbilityCreateManyAbilityInput | CharacterAbilityCreateManyAbilityInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithoutAbilityInput = {
    update: XOR<SkillUpdateWithoutAbilityInput, SkillUncheckedUpdateWithoutAbilityInput>
    create: XOR<SkillCreateWithoutAbilityInput, SkillUncheckedCreateWithoutAbilityInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutAbilityInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutAbilityInput, SkillUncheckedUpdateWithoutAbilityInput>
  }

  export type SkillUpdateWithoutAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playerSkill?: PlayerSkillUpdateManyWithoutSkillNestedInput
    Background_Skill?: Background_SkillUpdateManyWithoutSkill_potentialNestedInput
  }

  export type SkillUncheckedUpdateWithoutAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playerSkill?: PlayerSkillUncheckedUpdateManyWithoutSkillNestedInput
    Background_Skill?: Background_SkillUncheckedUpdateManyWithoutSkill_potentialNestedInput
  }

  export type ClassUpsertWithWhereUniqueWithoutSavingThrowsInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutSavingThrowsInput, ClassUncheckedUpdateWithoutSavingThrowsInput>
    create: XOR<ClassCreateWithoutSavingThrowsInput, ClassUncheckedCreateWithoutSavingThrowsInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutSavingThrowsInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutSavingThrowsInput, ClassUncheckedUpdateWithoutSavingThrowsInput>
  }

  export type ClassUpdateManyWithWhereWithoutSavingThrowsInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutSavingThrowsInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: BigIntFilter<"Class"> | bigint | number
    name?: StringFilter<"Class"> | string
    caster_type?: StringFilter<"Class"> | string
    subclass?: StringFilter<"Class"> | string
    hit_dice?: StringFilter<"Class"> | string
  }

  export type CharacterAbilityUpsertWithWhereUniqueWithoutAbilityInput = {
    where: CharacterAbilityWhereUniqueInput
    update: XOR<CharacterAbilityUpdateWithoutAbilityInput, CharacterAbilityUncheckedUpdateWithoutAbilityInput>
    create: XOR<CharacterAbilityCreateWithoutAbilityInput, CharacterAbilityUncheckedCreateWithoutAbilityInput>
  }

  export type CharacterAbilityUpdateWithWhereUniqueWithoutAbilityInput = {
    where: CharacterAbilityWhereUniqueInput
    data: XOR<CharacterAbilityUpdateWithoutAbilityInput, CharacterAbilityUncheckedUpdateWithoutAbilityInput>
  }

  export type CharacterAbilityUpdateManyWithWhereWithoutAbilityInput = {
    where: CharacterAbilityScalarWhereInput
    data: XOR<CharacterAbilityUpdateManyMutationInput, CharacterAbilityUncheckedUpdateManyWithoutAbilityInput>
  }

  export type AbilityCreateWithoutSkillInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    class?: ClassCreateNestedManyWithoutSavingThrowsInput
    CharacterAbility?: CharacterAbilityCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateWithoutSkillInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    class?: ClassUncheckedCreateNestedManyWithoutSavingThrowsInput
    CharacterAbility?: CharacterAbilityUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityCreateOrConnectWithoutSkillInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutSkillInput, AbilityUncheckedCreateWithoutSkillInput>
  }

  export type AbilityCreateManySkillInputEnvelope = {
    data: AbilityCreateManySkillInput | AbilityCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type PlayerSkillCreateWithoutSkillInput = {
    id?: bigint | number
    value: string
    character: CharacterCreateNestedOneWithoutPlayerSkillsInput
  }

  export type PlayerSkillUncheckedCreateWithoutSkillInput = {
    id?: bigint | number
    value: string
    characterId: bigint | number
  }

  export type PlayerSkillCreateOrConnectWithoutSkillInput = {
    where: PlayerSkillWhereUniqueInput
    create: XOR<PlayerSkillCreateWithoutSkillInput, PlayerSkillUncheckedCreateWithoutSkillInput>
  }

  export type Background_SkillCreateWithoutSkill_potentialInput = {
    id?: bigint | number
    background: BackgroundCreateNestedOneWithoutSkillsInput
  }

  export type Background_SkillUncheckedCreateWithoutSkill_potentialInput = {
    id?: bigint | number
    backgroundId: bigint | number
  }

  export type Background_SkillCreateOrConnectWithoutSkill_potentialInput = {
    where: Background_SkillWhereUniqueInput
    create: XOR<Background_SkillCreateWithoutSkill_potentialInput, Background_SkillUncheckedCreateWithoutSkill_potentialInput>
  }

  export type Background_SkillCreateManySkill_potentialInputEnvelope = {
    data: Background_SkillCreateManySkill_potentialInput | Background_SkillCreateManySkill_potentialInput[]
    skipDuplicates?: boolean
  }

  export type AbilityUpsertWithWhereUniqueWithoutSkillInput = {
    where: AbilityWhereUniqueInput
    update: XOR<AbilityUpdateWithoutSkillInput, AbilityUncheckedUpdateWithoutSkillInput>
    create: XOR<AbilityCreateWithoutSkillInput, AbilityUncheckedCreateWithoutSkillInput>
  }

  export type AbilityUpdateWithWhereUniqueWithoutSkillInput = {
    where: AbilityWhereUniqueInput
    data: XOR<AbilityUpdateWithoutSkillInput, AbilityUncheckedUpdateWithoutSkillInput>
  }

  export type AbilityUpdateManyWithWhereWithoutSkillInput = {
    where: AbilityScalarWhereInput
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyWithoutSkillInput>
  }

  export type PlayerSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: PlayerSkillWhereUniqueInput
    update: XOR<PlayerSkillUpdateWithoutSkillInput, PlayerSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<PlayerSkillCreateWithoutSkillInput, PlayerSkillUncheckedCreateWithoutSkillInput>
  }

  export type PlayerSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: PlayerSkillWhereUniqueInput
    data: XOR<PlayerSkillUpdateWithoutSkillInput, PlayerSkillUncheckedUpdateWithoutSkillInput>
  }

  export type PlayerSkillUpdateManyWithWhereWithoutSkillInput = {
    where: PlayerSkillScalarWhereInput
    data: XOR<PlayerSkillUpdateManyMutationInput, PlayerSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type Background_SkillUpsertWithWhereUniqueWithoutSkill_potentialInput = {
    where: Background_SkillWhereUniqueInput
    update: XOR<Background_SkillUpdateWithoutSkill_potentialInput, Background_SkillUncheckedUpdateWithoutSkill_potentialInput>
    create: XOR<Background_SkillCreateWithoutSkill_potentialInput, Background_SkillUncheckedCreateWithoutSkill_potentialInput>
  }

  export type Background_SkillUpdateWithWhereUniqueWithoutSkill_potentialInput = {
    where: Background_SkillWhereUniqueInput
    data: XOR<Background_SkillUpdateWithoutSkill_potentialInput, Background_SkillUncheckedUpdateWithoutSkill_potentialInput>
  }

  export type Background_SkillUpdateManyWithWhereWithoutSkill_potentialInput = {
    where: Background_SkillScalarWhereInput
    data: XOR<Background_SkillUpdateManyMutationInput, Background_SkillUncheckedUpdateManyWithoutSkill_potentialInput>
  }

  export type Background_SkillScalarWhereInput = {
    AND?: Background_SkillScalarWhereInput | Background_SkillScalarWhereInput[]
    OR?: Background_SkillScalarWhereInput[]
    NOT?: Background_SkillScalarWhereInput | Background_SkillScalarWhereInput[]
    id?: BigIntFilter<"Background_Skill"> | bigint | number
    skillId?: BigIntFilter<"Background_Skill"> | bigint | number
    backgroundId?: BigIntFilter<"Background_Skill"> | bigint | number
  }

  export type CharacterCreateWithoutBackgroundInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    class: ClassCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutBackgroundInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutBackgroundInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutBackgroundInput, CharacterUncheckedCreateWithoutBackgroundInput>
  }

  export type Background_SkillCreateWithoutBackgroundInput = {
    id?: bigint | number
    skill_potential: SkillCreateNestedOneWithoutBackground_SkillInput
  }

  export type Background_SkillUncheckedCreateWithoutBackgroundInput = {
    id?: bigint | number
    skillId: bigint | number
  }

  export type Background_SkillCreateOrConnectWithoutBackgroundInput = {
    where: Background_SkillWhereUniqueInput
    create: XOR<Background_SkillCreateWithoutBackgroundInput, Background_SkillUncheckedCreateWithoutBackgroundInput>
  }

  export type Background_SkillCreateManyBackgroundInputEnvelope = {
    data: Background_SkillCreateManyBackgroundInput | Background_SkillCreateManyBackgroundInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithoutBackgroundInput = {
    update: XOR<CharacterUpdateWithoutBackgroundInput, CharacterUncheckedUpdateWithoutBackgroundInput>
    create: XOR<CharacterCreateWithoutBackgroundInput, CharacterUncheckedCreateWithoutBackgroundInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutBackgroundInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutBackgroundInput, CharacterUncheckedUpdateWithoutBackgroundInput>
  }

  export type CharacterUpdateWithoutBackgroundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutBackgroundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type Background_SkillUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Background_SkillWhereUniqueInput
    update: XOR<Background_SkillUpdateWithoutBackgroundInput, Background_SkillUncheckedUpdateWithoutBackgroundInput>
    create: XOR<Background_SkillCreateWithoutBackgroundInput, Background_SkillUncheckedCreateWithoutBackgroundInput>
  }

  export type Background_SkillUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Background_SkillWhereUniqueInput
    data: XOR<Background_SkillUpdateWithoutBackgroundInput, Background_SkillUncheckedUpdateWithoutBackgroundInput>
  }

  export type Background_SkillUpdateManyWithWhereWithoutBackgroundInput = {
    where: Background_SkillScalarWhereInput
    data: XOR<Background_SkillUpdateManyMutationInput, Background_SkillUncheckedUpdateManyWithoutBackgroundInput>
  }

  export type SkillCreateWithoutBackground_SkillInput = {
    id?: bigint | number
    name: string
    description: string
    ability?: AbilityCreateNestedManyWithoutSkillInput
    playerSkill?: PlayerSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutBackground_SkillInput = {
    id?: bigint | number
    name: string
    description: string
    ability?: AbilityUncheckedCreateNestedManyWithoutSkillInput
    playerSkill?: PlayerSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutBackground_SkillInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutBackground_SkillInput, SkillUncheckedCreateWithoutBackground_SkillInput>
  }

  export type BackgroundCreateWithoutSkillsInput = {
    id?: bigint | number
    name: string
    description: string
    character?: CharacterCreateNestedOneWithoutBackgroundInput
  }

  export type BackgroundUncheckedCreateWithoutSkillsInput = {
    id?: bigint | number
    name: string
    description: string
    character?: CharacterUncheckedCreateNestedOneWithoutBackgroundInput
  }

  export type BackgroundCreateOrConnectWithoutSkillsInput = {
    where: BackgroundWhereUniqueInput
    create: XOR<BackgroundCreateWithoutSkillsInput, BackgroundUncheckedCreateWithoutSkillsInput>
  }

  export type SkillUpsertWithoutBackground_SkillInput = {
    update: XOR<SkillUpdateWithoutBackground_SkillInput, SkillUncheckedUpdateWithoutBackground_SkillInput>
    create: XOR<SkillCreateWithoutBackground_SkillInput, SkillUncheckedCreateWithoutBackground_SkillInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutBackground_SkillInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutBackground_SkillInput, SkillUncheckedUpdateWithoutBackground_SkillInput>
  }

  export type SkillUpdateWithoutBackground_SkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ability?: AbilityUpdateManyWithoutSkillNestedInput
    playerSkill?: PlayerSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutBackground_SkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ability?: AbilityUncheckedUpdateManyWithoutSkillNestedInput
    playerSkill?: PlayerSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type BackgroundUpsertWithoutSkillsInput = {
    update: XOR<BackgroundUpdateWithoutSkillsInput, BackgroundUncheckedUpdateWithoutSkillsInput>
    create: XOR<BackgroundCreateWithoutSkillsInput, BackgroundUncheckedCreateWithoutSkillsInput>
    where?: BackgroundWhereInput
  }

  export type BackgroundUpdateToOneWithWhereWithoutSkillsInput = {
    where?: BackgroundWhereInput
    data: XOR<BackgroundUpdateWithoutSkillsInput, BackgroundUncheckedUpdateWithoutSkillsInput>
  }

  export type BackgroundUpdateWithoutSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateOneWithoutBackgroundNestedInput
  }

  export type BackgroundUncheckedUpdateWithoutSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    character?: CharacterUncheckedUpdateOneWithoutBackgroundNestedInput
  }

  export type CharacterCreateWithoutAlignmentInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    class: ClassCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutAlignmentInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutAlignmentInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAlignmentInput, CharacterUncheckedCreateWithoutAlignmentInput>
  }

  export type CharacterCreateManyAlignmentInputEnvelope = {
    data: CharacterCreateManyAlignmentInput | CharacterCreateManyAlignmentInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutAlignmentInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutAlignmentInput, CharacterUncheckedUpdateWithoutAlignmentInput>
    create: XOR<CharacterCreateWithoutAlignmentInput, CharacterUncheckedCreateWithoutAlignmentInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutAlignmentInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutAlignmentInput, CharacterUncheckedUpdateWithoutAlignmentInput>
  }

  export type CharacterUpdateManyWithWhereWithoutAlignmentInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutAlignmentInput>
  }

  export type CharacterCreateWithoutPlayerSkillsInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    class: ClassCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutPlayerSkillsInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutPlayerSkillsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutPlayerSkillsInput, CharacterUncheckedCreateWithoutPlayerSkillsInput>
  }

  export type SkillCreateWithoutPlayerSkillInput = {
    id?: bigint | number
    name: string
    description: string
    ability?: AbilityCreateNestedManyWithoutSkillInput
    Background_Skill?: Background_SkillCreateNestedManyWithoutSkill_potentialInput
  }

  export type SkillUncheckedCreateWithoutPlayerSkillInput = {
    id?: bigint | number
    name: string
    description: string
    ability?: AbilityUncheckedCreateNestedManyWithoutSkillInput
    Background_Skill?: Background_SkillUncheckedCreateNestedManyWithoutSkill_potentialInput
  }

  export type SkillCreateOrConnectWithoutPlayerSkillInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutPlayerSkillInput, SkillUncheckedCreateWithoutPlayerSkillInput>
  }

  export type CharacterUpsertWithoutPlayerSkillsInput = {
    update: XOR<CharacterUpdateWithoutPlayerSkillsInput, CharacterUncheckedUpdateWithoutPlayerSkillsInput>
    create: XOR<CharacterCreateWithoutPlayerSkillsInput, CharacterUncheckedCreateWithoutPlayerSkillsInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutPlayerSkillsInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutPlayerSkillsInput, CharacterUncheckedUpdateWithoutPlayerSkillsInput>
  }

  export type CharacterUpdateWithoutPlayerSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutPlayerSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type SkillUpsertWithWhereUniqueWithoutPlayerSkillInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutPlayerSkillInput, SkillUncheckedUpdateWithoutPlayerSkillInput>
    create: XOR<SkillCreateWithoutPlayerSkillInput, SkillUncheckedCreateWithoutPlayerSkillInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutPlayerSkillInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutPlayerSkillInput, SkillUncheckedUpdateWithoutPlayerSkillInput>
  }

  export type SkillUpdateManyWithWhereWithoutPlayerSkillInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutPlayerSkillInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: BigIntFilter<"Skill"> | bigint | number
    name?: StringFilter<"Skill"> | string
    description?: StringFilter<"Skill"> | string
  }

  export type CharacterCreateWithoutAbilitiesInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    class: ClassCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutAbilitiesInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    languages?: CharacterLanguageUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutAbilitiesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
  }

  export type AbilityCreateWithoutCharacterAbilityInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skill?: SkillCreateNestedOneWithoutAbilityInput
    class?: ClassCreateNestedManyWithoutSavingThrowsInput
  }

  export type AbilityUncheckedCreateWithoutCharacterAbilityInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
    skillid?: bigint | number | null
    class?: ClassUncheckedCreateNestedManyWithoutSavingThrowsInput
  }

  export type AbilityCreateOrConnectWithoutCharacterAbilityInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutCharacterAbilityInput, AbilityUncheckedCreateWithoutCharacterAbilityInput>
  }

  export type CharacterUpsertWithoutAbilitiesInput = {
    update: XOR<CharacterUpdateWithoutAbilitiesInput, CharacterUncheckedUpdateWithoutAbilitiesInput>
    create: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutAbilitiesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutAbilitiesInput, CharacterUncheckedUpdateWithoutAbilitiesInput>
  }

  export type CharacterUpdateWithoutAbilitiesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAbilitiesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type AbilityUpsertWithoutCharacterAbilityInput = {
    update: XOR<AbilityUpdateWithoutCharacterAbilityInput, AbilityUncheckedUpdateWithoutCharacterAbilityInput>
    create: XOR<AbilityCreateWithoutCharacterAbilityInput, AbilityUncheckedCreateWithoutCharacterAbilityInput>
    where?: AbilityWhereInput
  }

  export type AbilityUpdateToOneWithWhereWithoutCharacterAbilityInput = {
    where?: AbilityWhereInput
    data: XOR<AbilityUpdateWithoutCharacterAbilityInput, AbilityUncheckedUpdateWithoutCharacterAbilityInput>
  }

  export type AbilityUpdateWithoutCharacterAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skill?: SkillUpdateOneWithoutAbilityNestedInput
    class?: ClassUpdateManyWithoutSavingThrowsNestedInput
  }

  export type AbilityUncheckedUpdateWithoutCharacterAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skillid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    class?: ClassUncheckedUpdateManyWithoutSavingThrowsNestedInput
  }

  export type CharacterLanguageCreateWithoutLanguageInput = {
    id?: bigint | number
    character: CharacterCreateNestedOneWithoutLanguagesInput
  }

  export type CharacterLanguageUncheckedCreateWithoutLanguageInput = {
    id?: bigint | number
    characterId: bigint | number
  }

  export type CharacterLanguageCreateOrConnectWithoutLanguageInput = {
    where: CharacterLanguageWhereUniqueInput
    create: XOR<CharacterLanguageCreateWithoutLanguageInput, CharacterLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type CharacterLanguageCreateManyLanguageInputEnvelope = {
    data: CharacterLanguageCreateManyLanguageInput | CharacterLanguageCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type CharacterLanguageUpsertWithWhereUniqueWithoutLanguageInput = {
    where: CharacterLanguageWhereUniqueInput
    update: XOR<CharacterLanguageUpdateWithoutLanguageInput, CharacterLanguageUncheckedUpdateWithoutLanguageInput>
    create: XOR<CharacterLanguageCreateWithoutLanguageInput, CharacterLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type CharacterLanguageUpdateWithWhereUniqueWithoutLanguageInput = {
    where: CharacterLanguageWhereUniqueInput
    data: XOR<CharacterLanguageUpdateWithoutLanguageInput, CharacterLanguageUncheckedUpdateWithoutLanguageInput>
  }

  export type CharacterLanguageUpdateManyWithWhereWithoutLanguageInput = {
    where: CharacterLanguageScalarWhereInput
    data: XOR<CharacterLanguageUpdateManyMutationInput, CharacterLanguageUncheckedUpdateManyWithoutLanguageInput>
  }

  export type CharacterCreateWithoutLanguagesInput = {
    id?: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    race: RaceCreateNestedOneWithoutCharacterInput
    class: ClassCreateNestedOneWithoutCharacterInput
    background: BackgroundCreateNestedOneWithoutCharacterInput
    alignment: AlignmentCreateNestedOneWithoutCharacterInput
    playerSkills?: PlayerSkillCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutLanguagesInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
    playerSkills?: PlayerSkillUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: CharacterAbilityUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutLanguagesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutLanguagesInput, CharacterUncheckedCreateWithoutLanguagesInput>
  }

  export type LanguageCreateWithoutCharactersInput = {
    id?: bigint | number
    name: string
    description: string
    exotic: boolean
  }

  export type LanguageUncheckedCreateWithoutCharactersInput = {
    id?: bigint | number
    name: string
    description: string
    exotic: boolean
  }

  export type LanguageCreateOrConnectWithoutCharactersInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutCharactersInput, LanguageUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterUpsertWithoutLanguagesInput = {
    update: XOR<CharacterUpdateWithoutLanguagesInput, CharacterUncheckedUpdateWithoutLanguagesInput>
    create: XOR<CharacterCreateWithoutLanguagesInput, CharacterUncheckedCreateWithoutLanguagesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutLanguagesInput, CharacterUncheckedUpdateWithoutLanguagesInput>
  }

  export type CharacterUpdateWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type LanguageUpsertWithoutCharactersInput = {
    update: XOR<LanguageUpdateWithoutCharactersInput, LanguageUncheckedUpdateWithoutCharactersInput>
    create: XOR<LanguageCreateWithoutCharactersInput, LanguageUncheckedCreateWithoutCharactersInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutCharactersInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutCharactersInput, LanguageUncheckedUpdateWithoutCharactersInput>
  }

  export type LanguageUpdateWithoutCharactersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exotic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateWithoutCharactersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exotic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlayerSkillCreateManyCharacterInput = {
    id?: bigint | number
    value: string
  }

  export type CharacterAbilityCreateManyCharacterInput = {
    id?: bigint | number
    abilityId: bigint | number
  }

  export type CharacterLanguageCreateManyCharacterInput = {
    id?: bigint | number
    languageId: bigint | number
  }

  export type PlayerSkillUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    Skill?: SkillUpdateManyWithoutPlayerSkillNestedInput
  }

  export type PlayerSkillUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    Skill?: SkillUncheckedUpdateManyWithoutPlayerSkillNestedInput
  }

  export type PlayerSkillUncheckedUpdateManyWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterAbilityUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ability?: AbilityUpdateOneRequiredWithoutCharacterAbilityNestedInput
  }

  export type CharacterAbilityUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    abilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterAbilityUncheckedUpdateManyWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    abilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterLanguageUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language?: LanguageUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterLanguageUncheckedUpdateWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    languageId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterLanguageUncheckedUpdateManyWithoutCharacterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    languageId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RaceCreateManySubrace_ofInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type RaceTraitCreateManyRaceInput = {
    id?: number
    traitId: bigint | number
  }

  export type CharacterCreateManyRaceInput = {
    id?: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
  }

  export type RaceUpdateWithoutSubrace_ofInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutSubrace_ofNestedInput
    Trait?: TraitUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUpdateManyWithoutRaceNestedInput
    Character?: CharacterUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutSubrace_ofInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUncheckedUpdateManyWithoutSubrace_ofNestedInput
    Trait?: TraitUncheckedUpdateManyWithoutRaceNestedInput
    traits?: RaceTraitUncheckedUpdateManyWithoutRaceNestedInput
    Character?: CharacterUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutSubrace_ofInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUpdateWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    races?: RaceTraitUpdateManyWithoutTraitNestedInput
  }

  export type TraitUncheckedUpdateWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    races?: RaceTraitUncheckedUpdateManyWithoutTraitNestedInput
  }

  export type TraitUncheckedUpdateManyWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RaceTraitUpdateWithoutRaceInput = {
    trait?: TraitUpdateOneRequiredWithoutRacesNestedInput
  }

  export type RaceTraitUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    traitId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RaceTraitUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    traitId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterUpdateWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutRaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type RaceTraitCreateManyTraitInput = {
    id?: number
    raceId: bigint | number
  }

  export type RaceUpdateWithoutTraitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Race?: RaceUpdateManyWithoutSubrace_ofNestedInput
    subrace_of?: RaceUpdateOneWithoutRaceNestedInput
    traits?: RaceTraitUpdateManyWithoutRaceNestedInput
    Character?: CharacterUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutTraitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Race?: RaceUncheckedUpdateManyWithoutSubrace_ofNestedInput
    traits?: RaceTraitUncheckedUpdateManyWithoutRaceNestedInput
    Character?: CharacterUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutTraitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subraceOfId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type RaceTraitUpdateWithoutTraitInput = {
    race?: RaceUpdateOneRequiredWithoutTraitsNestedInput
  }

  export type RaceTraitUncheckedUpdateWithoutTraitInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RaceTraitUncheckedUpdateManyWithoutTraitInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterCreateManyClassInput = {
    id?: bigint | number
    raceId: bigint | number
    backgroundId: bigint | number
    alignmentId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
  }

  export type AbilityUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skill?: SkillUpdateOneWithoutAbilityNestedInput
    CharacterAbility?: CharacterAbilityUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skillid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CharacterAbility?: CharacterAbilityUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateManyWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    skillid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CharacterUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    alignment?: AlignmentUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    alignmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterAbilityCreateManyAbilityInput = {
    id?: bigint | number
    characterId: bigint | number
  }

  export type ClassUpdateWithoutSavingThrowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
    Character?: CharacterUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSavingThrowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
    Character?: CharacterUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutSavingThrowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    caster_type?: StringFieldUpdateOperationsInput | string
    subclass?: StringFieldUpdateOperationsInput | string
    hit_dice?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterAbilityUpdateWithoutAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    character?: CharacterUpdateOneRequiredWithoutAbilitiesNestedInput
  }

  export type CharacterAbilityUncheckedUpdateWithoutAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterAbilityUncheckedUpdateManyWithoutAbilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AbilityCreateManySkillInput = {
    id?: bigint | number
    name: string
    description: string
    short_desc: string
  }

  export type Background_SkillCreateManySkill_potentialInput = {
    id?: bigint | number
    backgroundId: bigint | number
  }

  export type AbilityUpdateWithoutSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateManyWithoutSavingThrowsNestedInput
    CharacterAbility?: CharacterAbilityUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateWithoutSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    class?: ClassUncheckedUpdateManyWithoutSavingThrowsNestedInput
    CharacterAbility?: CharacterAbilityUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateManyWithoutSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSkillUpdateWithoutSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateOneRequiredWithoutPlayerSkillsNestedInput
  }

  export type PlayerSkillUncheckedUpdateWithoutSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PlayerSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: StringFieldUpdateOperationsInput | string
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Background_SkillUpdateWithoutSkill_potentialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    background?: BackgroundUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type Background_SkillUncheckedUpdateWithoutSkill_potentialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Background_SkillUncheckedUpdateManyWithoutSkill_potentialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Background_SkillCreateManyBackgroundInput = {
    id?: bigint | number
    skillId: bigint | number
  }

  export type Background_SkillUpdateWithoutBackgroundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_potential?: SkillUpdateOneRequiredWithoutBackground_SkillNestedInput
  }

  export type Background_SkillUncheckedUpdateWithoutBackgroundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    skillId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Background_SkillUncheckedUpdateManyWithoutBackgroundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    skillId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterCreateManyAlignmentInput = {
    id?: bigint | number
    raceId: bigint | number
    classId: bigint | number
    backgroundId: bigint | number
    xp: number
    level: number
    name: string
    player: string
    AC: number
    speed: number
    hp: number
    max_hp: number
    temp_hp: number
    personality: string
    ideals: string
    bonds: string
    flaws: string
    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    appearance: string
    allies: string
    backstory: string
    treasure: string
    traits: string
  }

  export type CharacterUpdateWithoutAlignmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutCharacterNestedInput
    class?: ClassUpdateOneRequiredWithoutCharacterNestedInput
    background?: BackgroundUpdateOneRequiredWithoutCharacterNestedInput
    playerSkills?: PlayerSkillUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAlignmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    playerSkills?: PlayerSkillUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: CharacterAbilityUncheckedUpdateManyWithoutCharacterNestedInput
    languages?: CharacterLanguageUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutAlignmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    raceId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    backgroundId?: BigIntFieldUpdateOperationsInput | bigint | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    AC?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    max_hp?: IntFieldUpdateOperationsInput | number
    temp_hp?: IntFieldUpdateOperationsInput | number
    personality?: StringFieldUpdateOperationsInput | string
    ideals?: StringFieldUpdateOperationsInput | string
    bonds?: StringFieldUpdateOperationsInput | string
    flaws?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    eyes?: StringFieldUpdateOperationsInput | string
    skin?: StringFieldUpdateOperationsInput | string
    hair?: StringFieldUpdateOperationsInput | string
    appearance?: StringFieldUpdateOperationsInput | string
    allies?: StringFieldUpdateOperationsInput | string
    backstory?: StringFieldUpdateOperationsInput | string
    treasure?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUpdateWithoutPlayerSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ability?: AbilityUpdateManyWithoutSkillNestedInput
    Background_Skill?: Background_SkillUpdateManyWithoutSkill_potentialNestedInput
  }

  export type SkillUncheckedUpdateWithoutPlayerSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ability?: AbilityUncheckedUpdateManyWithoutSkillNestedInput
    Background_Skill?: Background_SkillUncheckedUpdateManyWithoutSkill_potentialNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutPlayerSkillInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterLanguageCreateManyLanguageInput = {
    id?: bigint | number
    characterId: bigint | number
  }

  export type CharacterLanguageUpdateWithoutLanguageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    character?: CharacterUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type CharacterLanguageUncheckedUpdateWithoutLanguageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CharacterLanguageUncheckedUpdateManyWithoutLanguageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    characterId?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}