const verifyContract = async (fullName, address, constructorArgs, library) => {
    await run("verify-contract", {
        address: address,
        contractName: fullName,
        libraries: JSON.stringify(library),
        constructorArguments: constructorArgs,
    });
};

Object.assign(module.exports, {
    verifyContract,
});
