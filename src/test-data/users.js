const validUsers = [
    {
        username: "standard_user",
        password: "secret_sauce",
    },
    {
        username: "performance_glitch_user",
        password: "secret_sauce",
    },
    {
        username: "visual_user",
        password: "secret_sauce",
    },
];

const invalidUsers = [
    {
        username: "locked_out_user",
        password: "secret_sauce",
    },
    {
        username: "test_invald_user",
        password: "secret_sauce",
    },
];

const problemUsers = [
    {
        username: "problem_user",
        password: "secret_sauce",
    },
];

module.exports = {
    validUsers,
    invalidUsers,
    problemUsers,
}