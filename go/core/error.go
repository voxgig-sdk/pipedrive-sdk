package core

type PipedriveError struct {
	IsPipedriveError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPipedriveError(code string, msg string, ctx *Context) *PipedriveError {
	return &PipedriveError{
		IsPipedriveError: true,
		Sdk:              "Pipedrive",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PipedriveError) Error() string {
	return e.Msg
}
