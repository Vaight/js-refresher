# In-class JS Refresher

Starting out blank, and we'll live code a while bunch.

This is on Github, so you can/should clone the repo and follow along as much as
you want.

I will push all my changes up so you can relive the magic later.

To install dependencies, `cd` into the directory where this README is and run
`npm install`.

After installing dependencies you can run a script using `ts-node` followed by
the relative file name, such as this:

```console
$ npx ts-node src/hello.ts
Hello World! 👋 🌎
```

Let me explain that:

- `npx` is a command that will run things in your local JS project
- In this case, we're running `ts-node` which is installed as a dependency
- `ts-node` is a Typescript-aware version of the Node JS runtime.
- The argument to `ts-node` is `src/hello.ts` which is our file to run
- If you make other files it can run those as well
