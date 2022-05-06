/**
 * @packageDocumentation
 * @module api.functional.sellers.sales.questions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { ISaleArticle } from "./../../../../structures/sales/articles/ISaleArticle";
import type { ISaleInquiry } from "./../../../../structures/sales/articles/ISaleInquiry";
import type { IPage } from "./../../../../structures/common/IPage";

/**
 * Store a new answer.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param inquiryId ID of the target inquiry to be answered
 * @param input Content to archive
 * @return The inquiry with newly archived answer
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when the sale is not yours
 * @throw 422 unprocessable entity error when you've already answered
 * 
 * @controller SellerSaleQuestionsController.store()
 * @path POST /sellers/:section/sales/:saleId/questions/:inquiryId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function store
    (
        connection: IConnection,
        section: string,
        saleId: number,
        inquiryId: number,
        input: Primitive<store.Input>
    ): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section, saleId, inquiryId),
        input
    );
}
export namespace store
{
    export type Input = Primitive<ISaleArticle.IContent>;
    export type Output = Primitive<ISaleInquiry<ISaleArticle.IContent>>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/questions/:inquiryId";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number, inquiryId: number): string
    {
        return `/sellers/${section}/sales/${saleId}/questions/${inquiryId}`;
    }
}

/**
 * Update an answer.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param inquiryId ID of the target inquiry to be updated
 * @param input New content to be overwritten
 * @return The inquiry record after the update
 * 
 * @controller SellerSaleQuestionsController.update()
 * @path POST /sellers/:section/sales/:saleId/questions/:inquiryId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function update
    (
        connection: IConnection,
        section: string,
        saleId: number,
        inquiryId: number,
        input: Primitive<update.Input>
    ): Promise<update.Output>
{
    return Fetcher.fetch
    (
        connection,
        update.ENCRYPTED,
        update.METHOD,
        update.path(section, saleId, inquiryId),
        input
    );
}
export namespace update
{
    export type Input = Primitive<ISaleArticle.IContent>;
    export type Output = Primitive<ISaleInquiry<ISaleArticle.IContent>>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/questions/:inquiryId";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number, inquiryId: number): string
    {
        return `/sellers/${section}/sales/${saleId}/questions/${inquiryId}`;
    }
}

/**
 * Remove an answer.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param inquiryId ID of the target inquiry that the answer would be erased
 * @return Empty object
 * 
 * @controller SellerSaleQuestionsController.remove()
 * @path DELETE /sellers/:section/sales/:saleId/questions/:inquiryId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function remove
    (
        connection: IConnection,
        section: string,
        saleId: number,
        inquiryId: number
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        remove.ENCRYPTED,
        remove.METHOD,
        remove.path(section, saleId, inquiryId)
    );
}
export namespace remove
{

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/questions/:inquiryId";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, inquiryId: number): string
    {
        return `/sellers/${section}/sales/${saleId}/questions/${inquiryId}`;
    }
}

/**
 * Get page of summarized inquiries.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param input Information about pagination and searching
 * @return Page of the inquiries
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller SellerSaleQuestionsController.index()
 * @path PATCH /sellers/:section/sales/:saleId/questions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<index.Input>
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId),
        input
    );
}
export namespace index
{
    export type Input = Primitive<ISaleInquiry.IRequest>;
    export type Output = Primitive<IPage<ISaleInquiry.ISummary>>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/questions";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number): string
    {
        return `/sellers/${section}/sales/${saleId}/questions`;
    }
}

/**
 * Get detailed record of an inquiry
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param id ID of the Target inquiry
 * @return Detailed record of the inquiry
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller SellerSaleQuestionsController.at()
 * @path GET /sellers/:section/sales/:saleId/questions/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(section, saleId, id)
    );
}
export namespace at
{
    export type Output = Primitive<ISaleInquiry<ISaleArticle.IContent>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/questions/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/sellers/${section}/sales/${saleId}/questions/${id}`;
    }
}