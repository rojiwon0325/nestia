import {
    BadRequestException,
    ExecutionContext,
    createParamDecorator,
} from "@nestjs/common";
import type express from "express";

/**
 * URL parameter decorator with type.
 *
 * `TypedQuery` is a decorator function getting specific typed query from the HTTP
 * request URL. It's almost same with the {@link nest.Query}, but `TypedQuery` can specify
 * the query type manually.
 *
 * @param name URL Query name
 * @param type Type of the URL query
 * @param multiple true if data is multiple, default is false
 * @param nullable true if data is nullable, default is false
 * @returns Parameter decorator
 *
 * @author jiwon ro - https://github.com/rojiwon0325
 */
export function TypedQuery(
    name: string,
    type: "boolean" | "number" | "string" | "uuid" = "string",
    multiple = false,
    nullable = false,
) {
    return createParamDecorator(function TypedQuery(
        {}: any,
        ctx: ExecutionContext,
    ) {
        const mapType = (str: string) => {
            if (type === "boolean") {
                if (str === "true" || str === "True" || str === "1") {
                    return true;
                }
                if (str === "false" || str === "False" || str === "0") {
                    return false;
                }
            }
            if (type === "number") {
                const num = Number(str);
                if (!isNaN(num)) return num;
            }
            if (type === "uuid" && UUID_PATTERN.test(str)) {
                return str;
            }
            if (type === "string") {
                return str;
            }
            throw new BadRequestException(
                `Value of the URL query '${name}' is not a ${type}.`,
            );
        };

        const request: express.Request = ctx.switchToHttp().getRequest();
        const value = request.query[name];

        if (value == undefined) {
            if (nullable) {
                return null;
            } else {
                throw new BadRequestException(
                    `Value of the URL query '${name}' is required.`,
                );
            }
        }
        if (typeof value === "string") {
            return multiple ? [mapType(value)] : mapType(value);
        }
        if (Array.isArray(value)) {
            if (!multiple) {
                throw new BadRequestException(
                    `Value of the URL query '${name}' is not a single.`,
                );
            }
            return value.map((item) => {
                if (typeof item !== "string") {
                    throw new BadRequestException(
                        `Value of the URL query '${name}' is not a ${type}.`,
                    );
                }
                return mapType(item);
            });
        }
        throw new BadRequestException(
            `Value of the URL query '${name}' is not a ${type}.`,
        );
    })(name);
}

const UUID_PATTERN =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
