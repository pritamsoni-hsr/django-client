export class djClient {
	// A map kind of storage for managing your data
	private _results: Array<any>;
	private _page: number;
	private _next: string;
	constructor(
		private _url: string,
		private _signature: string,
		private listFields: object,
		private detailFields: object // public http: HttpClient
	) {}
	list = (page: number, filters?: string) => {
		const url = filters
			? filters.startsWith('&')
				? `${this._url}/?page=${page}${filters}`
				: `${this._url}${filters}/?page=${page}`
			: `${this._url}/?page=${page}`;

		this._results.push({ key: filters, results: url });
	};
	retrieve = (slug: string, action: string = null) => {
		const url = action ? `${this._url}/${slug}/${action}` : `${this._url}/${slug}/`;
		return slug;
	};
	update = (resource: object, data: object) => {};

	delete = (id: number) => {
		this._results.forEach((container) => container.results.forEach((obj) => obj));
	};

	renderList = () => {};
	renderCard = () => {};
	get hasNext() {
		return Boolean(this._next);
	}
}
