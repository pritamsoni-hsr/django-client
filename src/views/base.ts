import { BehaviorSubject, Observable, Observer, from, throwError } from 'rxjs';
import { catchError, tap, filter, mapTo } from 'rxjs/operators';

function action(): any {
	// pass;
	return 1;
}

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
		const url = action
			? `${this._url}/${slug}/${action}`
			: `${this._url}/${slug}/`;
		return slug;
	};
	update = (resource: object, data: object) => {};

	delete = (id: number) => {
		this._results.forEach((container) =>
			container.results.forEach((obj: any) => obj)
		);
	};

	renderList = () => {};
	renderCard = () => {};
	get hasNext() {
		return Boolean(this._next);
	}
}
export class View {
	/*
	Intentionally simple parent class for all views. Only implements
	dispatch-by-method and simple sanity checking.
	*/
	http_method_names = [
		'get',
		'post',
		'put',
		'patch',
		'delete',
		'head',
		'options',
		'trace'
	];
	constructor(...kwargs: any) {
		/*
		Constructor. Called in the URLconf; can contain helpful extra
		keyword arguments, and other things.
		*/
		// Go through keyword arguments, and either save their values to our
		// instance, or raise an error.
		for (var key in kwargs) {
			// setattr(self, key, value)
		}
	}
	as_view(cls: any, ...initkwargs: any[]) {
		// Main entry point for a request-response process.
	}
	setup(self: any, request: any, ...kwargs: any[]) {
		// Initialize attributes shared by all view methods.
	}
	dispatch = () => {
		/*
			Try to dispatch to the right method; if a method doesn't exist,
			defer to the error handler. Also defer to the error handler if the
			request method isn't on the approved list.
		*/
	};
	http_method_not_allowed = () => {};
	options = () => {};
	_allowed_methods = () => {};
}

export class TemplateResponseMixin {
	// A mixin that can be used to render a template.
	template_name = null;
	template_engine = null;
	// response_class = TemplateResponse
	content_type = null;
	render_to_response = (self: any, context: any, ...response_kwargs: any) => {
		/*
		Return a response, using the `response_class` for this view, with a
		template rendered with the given context.
		Pass response_kwargs to the constructor of the response class.
		*/
		// response_kwargs.setdefault('content_type', self.content_type)
	};
	get_template_names = () => {
		/*
		Return a list of template names to be used for the request. Must return
		a list. May not be called if render_to_response() is overridden.
		*/
	};
}
