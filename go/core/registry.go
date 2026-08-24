package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDealEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

