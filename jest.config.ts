export default {
    collectCoverage: true,
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
};