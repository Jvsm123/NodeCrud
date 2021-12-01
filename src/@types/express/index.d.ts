declare global
{
    namespace Express
    {
        interface Request { flash: string };
    };
};
