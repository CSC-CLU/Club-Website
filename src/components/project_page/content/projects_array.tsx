declare const require: {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
    };
};
  

const context = require.context('./', false, /\.tsx$/);
const Projects_Array = context.keys().map(context);

export default Projects_Array;