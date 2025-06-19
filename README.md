# nopcommerce-typescript-client

A typescript client generated from nopCommerce swagger

Generated with:
swagger-typescript-api@13.0.22
Command:
npx swagger-typescript-api -p http://localhost:8010/api/frontend_v4.70.1/swagger.json -o ./src --modular

latest is
npx swagger-typescript-api@13.1.3 generate -p "http://localhost:8010/api/frontend_v4.80.1/swagger.json" -o ./src/generated --patch --modular --responses --extract-responses --extract-request-params --extract-request-body --extract-response-body --extract-response-error --module-name-index 1 --clean-output

Node version 22.13.0

<!-- Add operation ids in nopcommerce
src\Nop.Plugin.Misc.WebApi.Frontend\Infrastructure\PluginNopStartup.cs
services.AddSwaggerGen(options =>
{
options.CustomOperationIds(e => $"{e.HttpMethod}_{e.ActionDescriptor.RouteValues["controller"]}_{e.ActionDescriptor.RouteValues["action"]}"); -->
